import { NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as moment from 'moment';

export class CamfAnalyzer {
  constructor(private readonly databaseService: DatabaseService) {}

  async compute(accountIds: string[]) {
    if (!accountIds || accountIds.length === 0) {
      throw new NotFoundException(
        'No bank accounts provided for CAMF analysis',
      );
    }

    const accountId = accountIds[0]; // Assuming single account for CAMF analysis

    // Fetch classifications
    const classifications =
      await this.databaseService.transactionClassification.findMany({});

    const camfClassification = classifications.find((c) => c.code === 'CAMF');
    const vcClassification = classifications.find((c) => c.code === 'VC');
    const etClassification = classifications.find((c) => c.code === 'ET');
    const cwClassification = classifications.find((c) => c.code === 'CW');

    if (!camfClassification)
      throw new NotFoundException('CAMF classification not found');
    if (!vcClassification)
      throw new NotFoundException('VC classification not found');
    if (!etClassification)
      throw new NotFoundException('ET classification not found');
    if (!cwClassification)
      throw new NotFoundException('CW classification not found');

    // Fetch bank account with rate config
    const bankAccount = await this.databaseService.bankAccount.findUnique({
      where: { id: accountId },
      include: { rate: true },
    });

    if (!bankAccount?.rate) {
      throw new NotFoundException(
        `Missing rate config for account ${accountId}`,
      );
    }

    const rate = bankAccount.rate;
    const camfRate = rate.camfRate ?? 1;
    const vatRate = rate.vatRate || 0.075; // ✅ Default 7.5%
    const turnoverLimit = rate.turnoverLimit || 0;

    // Fetch all transactions for CAMF, VC, ET, and CW
    const transactions = await this.databaseService.bankTransaction.findMany({
      where: {
        bankAccountId: bankAccount.id,
        classificationId: {
          in: [
            camfClassification.id,
            vcClassification.id,
            cwClassification.id,
            etClassification.id,
          ],
        },
      },
    });

    // Filter transactions by type
    const camfTransactions = transactions.filter(
      (txn) =>
        txn.classificationId === camfClassification.id && txn.type === 'DEBIT',
    );

    const vcTransactions = transactions.filter(
      (txn) =>
        txn.classificationId === vcClassification.id && txn.type === 'DEBIT',
    );

    const etCwTransactions = transactions.filter(
      (txn) =>
        (txn.classificationId === etClassification.id ||
          txn.classificationId === cwClassification.id) &&
        txn.type === 'DEBIT',
    );

    // Create VC transaction map by date
    const vcMap = vcTransactions.reduce(
      (map, txn) => {
        const date = txn.transactionDate.toISOString().split('T')[0];
        if (!map[date]) map[date] = [];
        map[date].push(txn);
        return map;
      },
      {} as Record<string, any[]>,
    );

    // Pair each CAMF transaction with VC transaction(s)
    const pairedTransactions = await Promise.all(
      camfTransactions.map(async (camfTxn) => {
        const date = camfTxn.transactionDate.toISOString().split('T')[0];
        const matchingVCs = vcMap[date] || [];

        // ✅ Get ET & CW transactions between 1st of month and CAMF valueDate
        const startOfMonth = moment(camfTxn.valueDate)
          .startOf('month')
          .toDate();
        const valueDate = new Date(camfTxn.valueDate);

        const relevantETCW = etCwTransactions.filter((txn) => {
          const txnDate = new Date(txn.valueDate);
          return txnDate >= startOfMonth && txnDate <= valueDate;
        });

        // ✅ Compute transaction-level CAMF data
        let totalTurnover = 0;
        let totalCamfCharge = 0;
        let totalVatCharge = 0;

        const computations = relevantETCW.map((txn) => {
          const turnover = txn.amount;
          totalTurnover += turnover;

          let camfCharge = 0;
          let vatCharge = 0;

          if (turnover > turnoverLimit) {
            camfCharge = +((camfRate / 1000) * turnover).toFixed(2);
            vatCharge = +((vatRate / 100) * camfCharge).toFixed(2);
          }

          totalCamfCharge += camfCharge;
          totalVatCharge += vatCharge;

          return {
            transactionId: txn.id,
            type: txn.type,
            classificationId: txn.classificationId,
            description: txn.description,
            date: txn.transactionDate,
            amount: txn.amount,
            turnover,
            camfRate,
            camfCharge,
            vatRate,
            vatCharge,
            totalCharge: +(camfCharge + vatCharge).toFixed(2),
          };
        });

        return {
          camf: { ...camfTxn },
          vc: matchingVCs,
          computations,
          totals: {
            totalTurnover,
            totalCamfCharge,
            totalVatCharge,
            excess:
              camfTxn.amount +
              matchingVCs[0]?.amount -
              (totalCamfCharge + totalVatCharge),
          },
        };
      }),
    );

    // Generate summary
    const summary = this.generateCamfSummary(pairedTransactions);

    return {
      type: 'CAMF',
      accountId: bankAccount.id,
      accountName: bankAccount.accountName,
      computation: pairedTransactions,
      summary,
    };
  }

  private generateCamfSummary(pairedTransactions: any[]) {
    const summary = {
      camfs: [] as any[],
      totals: {
        totalBank: 0,
        totalClient: 0,
        difference: 0,
      },
    };

    for (const pair of pairedTransactions) {
      const camf = pair.camf;
      const vc = pair.vc.length > 0 ? pair.vc[0] : { amount: 0 }; // assume first VC or 0
      const totals = pair.totals;

      const bankCamf = camf.amount || 0;
      const bankVc = vc.amount || 0;
      const bankTotal = bankCamf + bankVc;

      const clientCamf = totals.totalCamfCharge || 0;
      const clientVc = totals.totalVatCharge || 0;
      const clientTotal = clientCamf + clientVc;

      const difference = bankTotal - clientTotal;

      summary.camfs.push({
        camf,
        vc,
        bank: {
          camf: bankCamf,
          vc: bankVc,
          total: bankTotal,
        },
        client: {
          camf: clientCamf,
          vc: clientVc,
          total: clientTotal,
        },
        difference,
      });

      summary.totals.totalBank += bankTotal;
      summary.totals.totalClient += clientTotal;
      summary.totals.difference += difference;
    }

    return summary;
  }
}

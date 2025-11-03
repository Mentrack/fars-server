import { BadRequestException, Injectable } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class CleanerService {
  /**
   * Cleans rows from your bank statement format.
   */
  async clean(rawRows: any[], openingBalance = 0): Promise<any[]> {
    const normalizedRows = this.normalizedRows(rawRows);
    const cleaned: any[] = [];

    for (let i = 0; i < normalizedRows.length; i++) {
      const row = normalizedRows[i];

      // 1️⃣ Directly map known columns
      const txDate = row['TransDate'];
      const valDate = row['ValueDate'] || txDate;
      const desc = row['TransDesc'] || '';

      const transactionDate = this.standardizeDate(txDate);
      const valueDate = this.standardizeDate(valDate);

      if (!transactionDate || !valueDate) {
        throw new BadRequestException(`Invalid date at row ${i + 1}`);
      }

      // 2️⃣ Parse debit, credit, balance safely
      let debit = this.parseAmount(row['Debit']);
      let credit = this.parseAmount(row['Credit']);
      const balance = this.parseAmount(row['Balance']);

      // 3️⃣ Fix negative values
      if (debit < 0) {
        credit = Math.abs(debit);
        debit = 0.0;
      }
      if (credit < 0) {
        debit = Math.abs(credit);
        credit = 0.0;
      }

      const amount = debit > 0 ? debit : credit;
      const type = debit > 0 ? 'DEBIT' : 'CREDIT';

      cleaned.push({
        transactionDate,
        valueDate,
        description: desc.trim(),
        debit,
        credit,
        amount,
        type, // 'DEBIT' or 'CREDIT'
        balance,
        rowIndex: row['No'] || i + 1,
        tellerNo: row['Teller No'] || null,
        chequeNo: row['Cheque No'] || null,
      });
    }

    // 🔁 Recompute balance using the openingBalance
    let runningBalance = 0;
    const firstTransaction = cleaned[0];

    if (firstTransaction) {
      const { balance, amount, type } = firstTransaction;
      runningBalance = type === 'CREDIT' ? balance - amount : balance + amount;
    }
    // If opening balance is provided, adjust the first transaction's balance
    for (const row of cleaned) {
      if (row.type === 'CREDIT') {
        runningBalance += row.amount;
      } else {
        runningBalance -= row.amount;
      }
      // Keep precision with full decimal value
      row.balance = Number(runningBalance.toFixed(2));
    }

    return cleaned;
  }

  /**
   * Standardizes date format for `5-Jan-15` to `YYYY-MM-DD`
   */
  private standardizeDate(input: string): string | null {
    const m = moment(
      input,
      ['D-MMM-YY', 'DD-MMM-YY', 'DD-MM-YYYY', 'YYYY-MM-DD'],
      true,
    );
    return m.isValid() ? m.format('YYYY-MM-DD') : null;
  }

  /**
   * Parses money safely
   */
  private parseAmount(input: string | number | undefined): number {
    if (!input) return 0;
    const cleaned = String(input).replace(/,/g, '').trim();
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  }

  private normalizedRows = (rawRows: any[]): any[] => {
    const rows = rawRows.map((row) => {
      const cleaned: any = {};
      for (const key in row) {
        cleaned[key.trim()] =
          typeof row[key] === 'string' ? row[key].trim() : row[key];
      }
      return cleaned;
    });
    return rows;
  };
}

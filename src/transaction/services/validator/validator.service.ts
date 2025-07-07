import { BadRequestException, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ValidatorService {
  private readonly logger = new Logger(ValidatorService.name);

  async validateBalanceFlow(transactions: any[]): Promise<any[]> {
    if (transactions.length === 0) return [];

    const updatedTransactions = [...transactions];
    let runningBalance = updatedTransactions[0].balance;

    for (let i = 1; i < updatedTransactions.length; i++) {
      const prev = updatedTransactions[i - 1];
      const current = updatedTransactions[i];

      const movement =
        current.type === 'CREDIT' ? current.amount : -current.amount;

      const expectedBalance = parseFloat(
        (runningBalance + movement).toFixed(2),
      );
      const actualBalance = parseFloat(current.balance.toFixed(2));

      if (Math.abs(expectedBalance - actualBalance) > 0.01) {
        current.balance = expectedBalance;
      }

      runningBalance = current.balance;
    }

    return updatedTransactions;
  }
}

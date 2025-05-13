import { randomInt } from 'crypto';

export function generateBankAccountCode(): string {
  const random = randomInt(10000000, 99999999); // 8-digit number
  return `BAC${random}`;
}

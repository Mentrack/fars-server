/*
  Warnings:

  - Changed the type of `accountType` on the `bank_accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `bank_transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('CURRENT', 'SAVINGS');

-- AlterTable
ALTER TABLE "bank_accounts" DROP COLUMN "accountType",
ADD COLUMN     "accountType" "AccountType" NOT NULL;

-- AlterTable
ALTER TABLE "bank_transactions" DROP COLUMN "type",
ADD COLUMN     "type" "TransactionType" NOT NULL;

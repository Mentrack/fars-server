/*
  Warnings:

  - The values [FEE] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `contractId` on the `bank_accounts` table. All the data in the column will be lost.
  - You are about to drop the `account_contracts` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('DEPOSIT', 'WITHDRAWAL');
ALTER TABLE "transaction_classifications" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "account_contracts" DROP CONSTRAINT "account_contracts_clientId_fkey";

-- DropForeignKey
ALTER TABLE "bank_accounts" DROP CONSTRAINT "bank_accounts_contractId_fkey";

-- AlterTable
ALTER TABLE "bank_accounts" DROP COLUMN "contractId",
ADD COLUMN     "rateId" TEXT;

-- DropTable
DROP TABLE "account_contracts";

-- CreateTable
CREATE TABLE "account_rates" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "drRates" JSONB,
    "loanInterestRates" JSONB,
    "lcCommissions" JSONB,
    "preNegotiationRates" JSONB,
    "postNegotiationRates" JSONB,
    "creditInterestRates" JSONB,
    "returnChargeRate" DOUBLE PRECISION,
    "returnChargeLimit" DOUBLE PRECISION,
    "cotCovenantRate" DOUBLE PRECISION,
    "cotOffCoverRate" DOUBLE PRECISION,
    "cotOICRate" DOUBLE PRECISION,
    "turnoverLimit" DOUBLE PRECISION,
    "cotCovenantFrequency" TEXT,
    "chargeCOTOnShortfall" BOOLEAN,
    "debitRate" DOUBLE PRECISION,
    "excessRate" DOUBLE PRECISION,
    "excessRateType" TEXT,
    "vatRate" DOUBLE PRECISION,
    "whtRate" DOUBLE PRECISION,
    "rateType" TEXT,
    "currency" TEXT,
    "effectiveFrom" TIMESTAMP(3),
    "effectiveTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_rates_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bank_accounts" ADD CONSTRAINT "bank_accounts_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "account_rates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_rates" ADD CONSTRAINT "account_rates_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

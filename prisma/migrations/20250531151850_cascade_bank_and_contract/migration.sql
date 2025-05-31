/*
  Warnings:

  - You are about to drop the column `bankAccountId` on the `account_contracts` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `account_contracts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "account_contracts" DROP CONSTRAINT "account_contracts_bankAccountId_fkey";

-- DropForeignKey
ALTER TABLE "bank_accounts" DROP CONSTRAINT "bank_accounts_clientId_fkey";

-- DropIndex
DROP INDEX "account_contracts_bankAccountId_key";

-- AlterTable
ALTER TABLE "account_contracts" DROP COLUMN "bankAccountId",
ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "bank_accounts" ADD COLUMN     "contractId" TEXT;

-- AddForeignKey
ALTER TABLE "bank_accounts" ADD CONSTRAINT "bank_accounts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_accounts" ADD CONSTRAINT "bank_accounts_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "account_contracts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_contracts" ADD CONSTRAINT "account_contracts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

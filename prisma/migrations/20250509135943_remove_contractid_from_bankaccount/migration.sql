/*
  Warnings:

  - You are about to drop the column `contractId` on the `bank_accounts` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "bank_accounts_contractId_key";

-- AlterTable
ALTER TABLE "bank_accounts" DROP COLUMN "contractId";

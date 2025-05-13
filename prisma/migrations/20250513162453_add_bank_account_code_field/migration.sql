/*
  Warnings:

  - A unique constraint covering the columns `[accountCode]` on the table `bank_accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountCode` to the `bank_accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bank_accounts" ADD COLUMN     "accountCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "bank_accounts_accountCode_key" ON "bank_accounts"("accountCode");

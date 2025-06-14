/*
  Warnings:

  - You are about to drop the column `rateCode` on the `account_rates` table. All the data in the column will be lost.
  - You are about to drop the column `accountCode` on the `bank_accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `account_rates` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `bank_accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `documents` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `account_rates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `bank_accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `documents` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "account_rates_rateCode_key";

-- DropIndex
DROP INDEX "bank_accounts_accountCode_key";

-- AlterTable
ALTER TABLE "account_rates" DROP COLUMN "rateCode",
ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "bank_accounts" DROP COLUMN "accountCode",
ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "account_rates_code_key" ON "account_rates"("code");

-- CreateIndex
CREATE UNIQUE INDEX "bank_accounts_code_key" ON "bank_accounts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "documents_code_key" ON "documents"("code");

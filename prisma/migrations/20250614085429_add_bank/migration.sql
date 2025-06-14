/*
  Warnings:

  - You are about to drop the column `bankName` on the `bank_accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rateCode]` on the table `account_rates` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rateCode` to the `account_rates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bankId` to the `bank_accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "account_rates" ADD COLUMN     "rateCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "bank_accounts" DROP COLUMN "bankName",
ADD COLUMN     "bankId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "banks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "banks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "banks_code_key" ON "banks"("code");

-- CreateIndex
CREATE UNIQUE INDEX "account_rates_rateCode_key" ON "account_rates"("rateCode");

-- AddForeignKey
ALTER TABLE "bank_accounts" ADD CONSTRAINT "bank_accounts_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "banks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

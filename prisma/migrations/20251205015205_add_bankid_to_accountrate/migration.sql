/*
  Warnings:

  - Added the required column `bankId` to the `account_rates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "account_rates" ADD COLUMN     "bankId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "account_rates" ADD CONSTRAINT "account_rates_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "banks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

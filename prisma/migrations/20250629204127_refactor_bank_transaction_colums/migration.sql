/*
  Warnings:

  - You are about to drop the column `currency` on the `bank_transactions` table. All the data in the column will be lost.
  - Added the required column `balance` to the `bank_transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bank_transactions" DROP COLUMN "currency",
ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL;

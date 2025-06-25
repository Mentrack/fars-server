/*
  Warnings:

  - You are about to drop the `_UserUploadedTransactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserUploadedTransactions" DROP CONSTRAINT "_UserUploadedTransactions_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserUploadedTransactions" DROP CONSTRAINT "_UserUploadedTransactions_B_fkey";

-- AlterTable
ALTER TABLE "bank_accounts" ADD COLUMN     "openingBalance" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "bank_transactions" ADD COLUMN     "isReversal" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "_UserUploadedTransactions";

-- CreateTable
CREATE TABLE "reversal_keywords" (
    "id" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "isGlobal" BOOLEAN NOT NULL DEFAULT false,
    "bankId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reversal_keywords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reversal_keywords_keyword_bankId_key" ON "reversal_keywords"("keyword", "bankId");

-- AddForeignKey
ALTER TABLE "reversal_keywords" ADD CONSTRAINT "reversal_keywords_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "banks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

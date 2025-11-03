/*
  Warnings:

  - A unique constraint covering the columns `[bankId,accountNumber]` on the table `bank_accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[classificationId,keyword,isRegex]` on the table `classification_patterns` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "bank_accounts_accountNumber_key";

-- AlterTable
ALTER TABLE "account_rates" ADD COLUMN     "camfRate" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "reversal_keywords" ALTER COLUMN "isGlobal" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_TransactionDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TransactionDocuments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TransactionDocuments_B_index" ON "_TransactionDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "bank_accounts_bankId_accountNumber_key" ON "bank_accounts"("bankId", "accountNumber");

-- CreateIndex
CREATE UNIQUE INDEX "classification_patterns_classificationId_keyword_isRegex_key" ON "classification_patterns"("classificationId", "keyword", "isRegex");

-- AddForeignKey
ALTER TABLE "_TransactionDocuments" ADD CONSTRAINT "_TransactionDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "bank_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TransactionDocuments" ADD CONSTRAINT "_TransactionDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

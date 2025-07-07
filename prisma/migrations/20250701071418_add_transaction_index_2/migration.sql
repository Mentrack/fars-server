-- DropIndex
DROP INDEX "bank_transactions_valueDate_transactionDate_createdAt_idx";

-- CreateIndex
CREATE INDEX "bank_transactions_valueDate_transactionDate_createdAt_bankA_idx" ON "bank_transactions"("valueDate", "transactionDate", "createdAt", "bankAccountId");

-- CreateIndex
CREATE INDEX "bank_transactions_valueDate_transactionDate_createdAt_idx" ON "bank_transactions"("valueDate", "transactionDate", "createdAt");

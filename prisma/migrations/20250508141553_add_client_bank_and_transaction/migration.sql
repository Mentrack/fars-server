-- CreateEnum
CREATE TYPE "ClassificationCode" AS ENUM ('CD', 'LCD', 'UCD', 'LD', 'RET', 'REV', 'INT', 'CW', 'IT', 'ET', 'LR', 'LNT', 'CO', 'FEE', 'MC', 'CAMF', 'VAT');

-- CreateTable
CREATE TABLE "transaction_classifications" (
    "id" TEXT NOT NULL,
    "code" "ClassificationCode" NOT NULL,
    "category" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transaction_classifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank_transactions" (
    "id" TEXT NOT NULL,
    "bankAccountId" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "valueDate" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reference" TEXT,
    "chequeNo" TEXT,
    "tellerNo" TEXT,
    "currency" TEXT NOT NULL,
    "classificationId" TEXT NOT NULL,
    "user" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bank_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank_accounts" (
    "id" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "contractId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_contracts" (
    "id" TEXT NOT NULL,
    "bankAccountId" TEXT NOT NULL,
    "returnChargeRate" DOUBLE PRECISION NOT NULL,
    "returnChargeLimit" DOUBLE PRECISION NOT NULL,
    "cotCovenantRate" DOUBLE PRECISION NOT NULL,
    "cotOffCoverRate" DOUBLE PRECISION NOT NULL,
    "cotOICRate" DOUBLE PRECISION NOT NULL,
    "turnoverLimit" DOUBLE PRECISION NOT NULL,
    "cotCovenantFrequency" TEXT NOT NULL,
    "chargeCOTOnShortfall" BOOLEAN NOT NULL,
    "creditInterestRate" DOUBLE PRECISION NOT NULL,
    "debitRate" DOUBLE PRECISION NOT NULL,
    "excessRate" DOUBLE PRECISION NOT NULL,
    "excessRateType" TEXT NOT NULL,
    "vatRate" DOUBLE PRECISION NOT NULL,
    "whtRate" DOUBLE PRECISION NOT NULL,
    "rateType" TEXT NOT NULL,
    "effectiveFrom" TIMESTAMP(3) NOT NULL,
    "effectiveTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff_account_assignments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "assignedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "staff_account_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserUploadedTransactions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserUploadedTransactions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_StaffAssignments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_StaffAssignments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "bank_accounts_accountNumber_key" ON "bank_accounts"("accountNumber");

-- CreateIndex
CREATE UNIQUE INDEX "bank_accounts_contractId_key" ON "bank_accounts"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "account_contracts_bankAccountId_key" ON "account_contracts"("bankAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "staff_account_assignments_userId_accountId_key" ON "staff_account_assignments"("userId", "accountId");

-- CreateIndex
CREATE INDEX "_UserUploadedTransactions_B_index" ON "_UserUploadedTransactions"("B");

-- CreateIndex
CREATE INDEX "_StaffAssignments_B_index" ON "_StaffAssignments"("B");

-- AddForeignKey
ALTER TABLE "bank_transactions" ADD CONSTRAINT "bank_transactions_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "bank_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_transactions" ADD CONSTRAINT "bank_transactions_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_transactions" ADD CONSTRAINT "bank_transactions_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "transaction_classifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_accounts" ADD CONSTRAINT "bank_accounts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_contracts" ADD CONSTRAINT "account_contracts_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "bank_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_account_assignments" ADD CONSTRAINT "staff_account_assignments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_account_assignments" ADD CONSTRAINT "staff_account_assignments_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "bank_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_account_assignments" ADD CONSTRAINT "staff_account_assignments_assignedById_fkey" FOREIGN KEY ("assignedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserUploadedTransactions" ADD CONSTRAINT "_UserUploadedTransactions_A_fkey" FOREIGN KEY ("A") REFERENCES "bank_transactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserUploadedTransactions" ADD CONSTRAINT "_UserUploadedTransactions_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StaffAssignments" ADD CONSTRAINT "_StaffAssignments_A_fkey" FOREIGN KEY ("A") REFERENCES "staff_account_assignments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StaffAssignments" ADD CONSTRAINT "_StaffAssignments_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

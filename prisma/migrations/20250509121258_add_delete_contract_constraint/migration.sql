-- DropForeignKey
ALTER TABLE "account_contracts" DROP CONSTRAINT "account_contracts_bankAccountId_fkey";

-- AddForeignKey
ALTER TABLE "account_contracts" ADD CONSTRAINT "account_contracts_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "bank_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

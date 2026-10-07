-- AlterTable
ALTER TABLE "account_rates" ADD COLUMN     "fees" JSONB,
ADD COLUMN     "managementFeeRate" DOUBLE PRECISION;

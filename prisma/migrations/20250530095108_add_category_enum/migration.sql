/*
  Warnings:

  - Changed the type of `category` on the `transaction_classifications` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('DEPOSIT', 'WITHDRAWAL', 'FEE');

-- AlterTable
ALTER TABLE "transaction_classifications" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;

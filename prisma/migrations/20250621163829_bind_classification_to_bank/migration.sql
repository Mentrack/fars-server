/*
  Warnings:

  - A unique constraint covering the columns `[bankId,code]` on the table `transaction_classifications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bankId` to the `transaction_classifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transaction_classifications" ADD COLUMN     "bankId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "transaction_classifications_bankId_code_key" ON "transaction_classifications"("bankId", "code");

-- AddForeignKey
ALTER TABLE "transaction_classifications" ADD CONSTRAINT "transaction_classifications_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "banks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `bankId` on the `transaction_classifications` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `transaction_classifications` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "transaction_classifications" DROP CONSTRAINT "transaction_classifications_bankId_fkey";

-- DropIndex
DROP INDEX "transaction_classifications_bankId_code_key";

-- AlterTable
ALTER TABLE "transaction_classifications" DROP COLUMN "bankId";

-- CreateTable
CREATE TABLE "classification_patterns" (
    "id" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "isRegex" BOOLEAN NOT NULL DEFAULT false,
    "bankId" TEXT,
    "classificationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "classification_patterns_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "classification_patterns_keyword_classificationId_bankId_key" ON "classification_patterns"("keyword", "classificationId", "bankId");

-- CreateIndex
CREATE UNIQUE INDEX "transaction_classifications_code_key" ON "transaction_classifications"("code");

-- AddForeignKey
ALTER TABLE "classification_patterns" ADD CONSTRAINT "classification_patterns_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "banks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classification_patterns" ADD CONSTRAINT "classification_patterns_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "transaction_classifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

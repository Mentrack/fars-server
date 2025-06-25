/*
  Warnings:

  - A unique constraint covering the columns `[keyword]` on the table `reversal_keywords` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "reversal_keywords_keyword_bankId_key";

-- CreateIndex
CREATE UNIQUE INDEX "reversal_keywords_keyword_key" ON "reversal_keywords"("keyword");

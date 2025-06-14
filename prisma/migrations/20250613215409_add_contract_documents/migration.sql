-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('CONTRACT', 'BANK_STATEMENT');

-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "DocumentType" NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RateDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_RateDocuments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_RateDocuments_B_index" ON "_RateDocuments"("B");

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RateDocuments" ADD CONSTRAINT "_RateDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "account_rates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RateDocuments" ADD CONSTRAINT "_RateDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "AnalysisTypeEnum" AS ENUM ('CAMF', 'COT', 'LOAN_INTEREST', 'LC', 'WHT');

-- CreateTable
CREATE TABLE "analysis_types" (
    "id" TEXT NOT NULL,
    "name" "AnalysisTypeEnum" NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "analysis_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "analysis_types_name_key" ON "analysis_types"("name");

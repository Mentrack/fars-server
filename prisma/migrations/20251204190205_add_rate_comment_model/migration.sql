-- CreateTable
CREATE TABLE "rate_comments" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "accountRateId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rate_comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rate_comments" ADD CONSTRAINT "rate_comments_accountRateId_fkey" FOREIGN KEY ("accountRateId") REFERENCES "account_rates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rate_comments" ADD CONSTRAINT "rate_comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "avatarUrl" TEXT NOT NULL DEFAULT 'https://gravatar.com/avatar/48c3863a0f03a81d67916d28fdaa0ea6?s=400&d=mp&r=pg';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deactivatedAt" TIMESTAMP(3),
ADD COLUMN     "deactivatedById" TEXT,
ADD COLUMN     "deactivationReason" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_deactivatedById_fkey" FOREIGN KEY ("deactivatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

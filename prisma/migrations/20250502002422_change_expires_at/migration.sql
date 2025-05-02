/*
  Warnings:

  - You are about to drop the column `expiresAt` on the `tokens` table. All the data in the column will be lost.
  - Added the required column `expiresIn` to the `tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tokens" DROP COLUMN "expiresAt",
ADD COLUMN     "expiresIn" TIMESTAMP(3) NOT NULL;

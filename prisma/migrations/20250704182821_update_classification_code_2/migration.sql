/*
  Warnings:

  - The values [VAT] on the enum `ClassificationCode` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ClassificationCode_new" AS ENUM ('CD', 'LCD', 'UCD', 'LD', 'RET', 'REV', 'INT', 'CW', 'IT', 'ET', 'LR', 'LNT', 'CO', 'FEE', 'VF', 'MC', 'CAMF', 'VC', 'WHT');
ALTER TABLE "transaction_classifications" ALTER COLUMN "code" TYPE "ClassificationCode_new" USING ("code"::text::"ClassificationCode_new");
ALTER TYPE "ClassificationCode" RENAME TO "ClassificationCode_old";
ALTER TYPE "ClassificationCode_new" RENAME TO "ClassificationCode";
DROP TYPE "ClassificationCode_old";
COMMIT;

/*
  Warnings:

  - The `position` column on the `Author` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `board` column on the `Author` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Author" DROP COLUMN "position",
ADD COLUMN     "position" TEXT[],
DROP COLUMN "board",
ADD COLUMN     "board" TEXT[];

/*
  Warnings:

  - You are about to drop the `_AuthorToPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `authors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AuthorToPost" DROP CONSTRAINT "_AuthorToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToPost" DROP CONSTRAINT "_AuthorToPost_B_fkey";

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "authorImages" TEXT[],
ADD COLUMN     "authors" TEXT[];

-- DropTable
DROP TABLE "_AuthorToPost";

-- DropTable
DROP TABLE "authors";

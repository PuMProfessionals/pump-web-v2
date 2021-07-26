/*
  Warnings:

  - You are about to drop the `posting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "posting";

-- CreateTable
CREATE TABLE "opportunity" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "posting_name" TEXT NOT NULL,
    "org_images" TEXT NOT NULL,
    "org_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "tags" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT true,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "posted_date" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "opportunity.slug_unique" ON "opportunity"("slug");

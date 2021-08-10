/*
  Warnings:

  - You are about to drop the `opportunity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "opportunity";

-- CreateTable
CREATE TABLE "posting" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "posting_name" TEXT NOT NULL,
    "org_images" TEXT NOT NULL,
    "org_name" TEXT NOT NULL,
    "lat" TEXT NOT NULL DEFAULT E'-1000',
    "long" TEXT NOT NULL DEFAULT E'-1000',
    "address" TEXT NOT NULL,
    "tags" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT true,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "posted_date" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "posting.slug_unique" ON "posting"("slug");

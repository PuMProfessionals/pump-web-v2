-- CreateTable
CREATE TABLE "AdminUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "authority" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- RenameIndex
ALTER INDEX "Author.slug_unique" RENAME TO "Author_slug_key";

-- RenameIndex
ALTER INDEX "posting.slug_unique" RENAME TO "posting_slug_key";

-- RenameIndex
ALTER INDEX "posts.slug_unique" RENAME TO "posts_slug_key";

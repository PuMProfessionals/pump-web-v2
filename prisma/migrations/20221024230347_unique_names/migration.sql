/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `AdminUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_name_key" ON "AdminUser"("name");

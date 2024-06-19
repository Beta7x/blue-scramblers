/*
  Warnings:

  - You are about to drop the column `image` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `travels` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `travels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Article` DROP COLUMN `image`,
    ADD COLUMN `image_url` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `travels` DROP COLUMN `image`,
    ADD COLUMN `image_url` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `userId` on the `mention` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Mention` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Mention_userId_idx` ON `mention`;

-- AlterTable
ALTER TABLE `mention` DROP COLUMN `userId`,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Mention_username_idx` ON `Mention`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

/*
  Warnings:

  - Added the required column `targetOwnerId` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notification` ADD COLUMN `targetOwnerId` VARCHAR(191) NOT NULL;

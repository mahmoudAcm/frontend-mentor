/*
  Warnings:

  - Added the required column `amount` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vote` ADD COLUMN `amount` INTEGER NOT NULL;

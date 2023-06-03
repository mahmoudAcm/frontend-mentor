/*
  Warnings:

  - Made the column `username` on table `mention` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `mention` MODIFY `username` VARCHAR(191) NOT NULL;

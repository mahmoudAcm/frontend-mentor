/*
  Warnings:

  - You are about to drop the column `parentCommentId` on the `reply` table. All the data in the column will be lost.
  - Added the required column `parentId` to the `Reply` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Reply_id_idx` ON `reply`;

-- AlterTable
ALTER TABLE `reply` DROP COLUMN `parentCommentId`,
    ADD COLUMN `parentId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Theards` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `parentId` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Theards_parentId_id_idx`(`parentId`, `id`),
    UNIQUE INDEX `Theards_userId_id_key`(`userId`, `id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Reply_parentId_id_idx` ON `Reply`(`parentId`, `id`);

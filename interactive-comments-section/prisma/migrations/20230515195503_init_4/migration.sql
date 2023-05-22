/*
  Warnings:

  - You are about to drop the `theards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `theards`;

-- CreateTable
CREATE TABLE `Theard` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `parentId` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Theard_parentId_id_idx`(`parentId`, `id`),
    UNIQUE INDEX `Theard_userId_id_key`(`userId`, `id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

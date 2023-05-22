/*
  Warnings:

  - You are about to drop the column `parentId` on the `reply` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `reply` table. All the data in the column will be lost.
  - You are about to drop the `theard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Reply_parentId_id_idx` ON `reply`;

-- AlterTable
ALTER TABLE `reply` DROP COLUMN `parentId`,
    DROP COLUMN `score`,
    ADD COLUMN `parentCommentId` VARCHAR(191) NULL,
    ADD COLUMN `parentReplyId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `theard`;

-- CreateIndex
CREATE INDEX `Reply_id_idx` ON `Reply`(`id`);

-- CreateIndex
CREATE INDEX `idx_parent_comment` ON `Reply`(`parentCommentId`);

-- CreateIndex
CREATE INDEX `idx_parent_reply` ON `Reply`(`parentReplyId`);

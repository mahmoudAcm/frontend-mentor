-- AlterTable
ALTER TABLE `notification` ADD COLUMN `commentId` VARCHAR(191) NULL,
    ADD COLUMN `replyId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `Notification_commentId_idx` ON `Notification`(`commentId`);

-- CreateIndex
CREATE INDEX `Notification_replyId_idx` ON `Notification`(`replyId`);

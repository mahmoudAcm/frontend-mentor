-- CreateTable
CREATE TABLE `Vote` (
    `id` VARCHAR(191) NOT NULL,
    `commentId` VARCHAR(191) NULL,
    `replyId` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `Vote_id_idx`(`id`),
    INDEX `Vote_commentId_idx`(`commentId`),
    INDEX `Vote_replyId_idx`(`replyId`),
    UNIQUE INDEX `Vote_userId_commentId_replyId_key`(`userId`, `commentId`, `replyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

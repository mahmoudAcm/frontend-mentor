-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_username_idx`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `score` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Comment_id_idx`(`id`),
    UNIQUE INDEX `Comment_userId_id_key`(`userId`, `id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reply` (
    `id` VARCHAR(191) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `parentCommentId` VARCHAR(191) NULL,
    `parentReplyId` VARCHAR(191) NULL,
    `score` INTEGER NOT NULL DEFAULT 0,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `Reply_id_idx`(`id`),
    INDEX `Reply_parentCommentId_idx`(`parentCommentId`),
    INDEX `Reply_parentReplyId_idx`(`parentReplyId`),
    UNIQUE INDEX `Reply_userId_id_key`(`userId`, `id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vote` (
    `id` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `commentId` VARCHAR(191) NULL,
    `replyId` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `Vote_id_idx`(`id`),
    INDEX `Vote_commentId_idx`(`commentId`),
    INDEX `Vote_replyId_idx`(`replyId`),
    UNIQUE INDEX `Vote_userId_commentId_key`(`userId`, `commentId`),
    UNIQUE INDEX `Vote_userId_replyId_key`(`userId`, `replyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` VARCHAR(191) NOT NULL,
    `action` ENUM('reply', 'vote', 'mention') NOT NULL,
    `type` ENUM('comment', 'reply') NOT NULL,
    `seen` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `commentId` VARCHAR(191) NULL,
    `replyId` VARCHAR(191) NULL,
    `targetId` VARCHAR(191) NOT NULL,
    `targetOwnerId` VARCHAR(191) NOT NULL,

    INDEX `Notification_id_idx`(`id`),
    INDEX `Notification_userId_idx`(`userId`),
    INDEX `Notification_commentId_idx`(`commentId`),
    INDEX `Notification_replyId_idx`(`replyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mention` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `commentId` VARCHAR(191) NULL,
    `replyId` VARCHAR(191) NULL,

    INDEX `Mention_username_idx`(`username`),
    INDEX `Mention_commentId_idx`(`commentId`),
    INDEX `Mention_replyId_idx`(`replyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

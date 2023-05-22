/*
  Warnings:

  - A unique constraint covering the columns `[userId,commentId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,replyId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Vote_userId_commentId_replyId_key` ON `vote`;

-- CreateIndex
CREATE UNIQUE INDEX `Vote_userId_commentId_key` ON `Vote`(`userId`, `commentId`);

-- CreateIndex
CREATE UNIQUE INDEX `Vote_userId_replyId_key` ON `Vote`(`userId`, `replyId`);

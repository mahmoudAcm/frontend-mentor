-- RenameIndex
ALTER TABLE `reply` RENAME INDEX `idx_parent_comment` TO `Reply_parentCommentId_idx`;

-- RenameIndex
ALTER TABLE `reply` RENAME INDEX `idx_parent_reply` TO `Reply_parentReplyId_idx`;

import data from '../../../data.json';
import { CommentOrReply, RepliesOf, Reply } from '@/src/types';

export const getAllRepliesOf = (
  repliesOf: RepliesOf,
  commentsOrReplies: Omit<CommentOrReply, 'hasReplies'>[],
  lvl: number
): RepliesOf => {
  if (lvl >= 5) {
    return repliesOf;
  }

  for (const commentOrReply of commentsOrReplies) {
    const replies = getReplies(commentOrReply.id);
    if (replies.length) {
      repliesOf[commentOrReply.id] = replies;
      return getAllRepliesOf(repliesOf, replies, lvl + 1);
    }
  }

  return repliesOf;
};

export function getReplies(parentComment: string) {
  const repliesOf = data.repliesOf as unknown as Record<string, Reply[]>;
  const replies = repliesOf[parentComment] ?? [];
  return replies.map(replay => ({
    hasReplies: Boolean(repliesOf[replay.id]),
    ...replay
  }));
}

export function getRepliesParent(id: string) {
  const repliesOf = data.repliesOf as unknown as Record<string, Reply[]>;
  for (const replies of Object.values(repliesOf)) {
    const repliesParent = replies.find(replay => replay.id === id);
    if (repliesParent) return repliesParent;
  }
  return;
}

export function getComments() {
  const comments = data.comments;
  return { comments, repliesOf: getAllRepliesOf({}, comments, 1) };
}

import { CommentsOrReplies, RepliesOf } from '@/src/types';

export default function mapNestedRepliesToRepliesOf(
  repliesOf: RepliesOf,
  commentsOrReplies: CommentsOrReplies,
  lvl: number
): RepliesOf {
  if (lvl >= 5) return repliesOf;
  for (const commentOrReply of commentsOrReplies) {
    const replies = commentOrReply.replies;
    if (replies.length) {
      repliesOf[commentOrReply.id] = replies.map(({ replies, ...reply }) => ({
        ...reply,
        hasReplies: Boolean(replies && replies.length)
      }));
      mapNestedRepliesToRepliesOf(repliesOf, replies, lvl + 1);
    }
  }
  return repliesOf;
}

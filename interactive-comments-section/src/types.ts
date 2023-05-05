import data from './data.json';

type Data = typeof data;

export type User = Data['currentUser'];
export type Comment = Data['comments']['0'];
export type Reply = Comment;

export type CommentOrReply = Comment & Reply & { hasReplies: boolean };
export type RepliesOf = Record<string, CommentOrReply[]>;

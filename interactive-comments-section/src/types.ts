import data from './data.json';

type Data = typeof data;

export type User = {
  username: string;
  email: string;
  image: string;
};

export type Comment = Omit<Data['comments']['0'], 'user'> & {
  user: User;
  votes: Votes;
};

export type Votes = [{ amount: -1 | 1 }];

export type Reply = Comment & { parentCommentId: string; parentReplyId: string };

export type CommentOrReply = Comment & Reply & { hasReplies: boolean };

export type CommentsOrReplies = (CommentOrReply & { replies: CommentsOrReplies })[];

export type RepliesOf = Record<string, CommentOrReply[]>;

export type Credentials = Readonly<{ email: string; password: string }>;

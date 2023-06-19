import data from './data.json';

type Data = typeof data;

export type User = {
  username: string;
  email: string;
  image: string;
};

export type Mentions = { user: User }[];

export type Comment = Omit<Data['comments']['0'], 'user'> & {
  user: User;
  votes: Votes;
  mentions: Mentions;
};

export type Votes = [{ amount: -1 | 1 }];

export type Reply = Comment & { parentCommentId: string; parentReplyId: string };

export type CommentOrReply = Comment & Reply & { hasReplies: boolean };

export type CommentsOrReplies = (CommentOrReply & { replies: CommentsOrReplies })[];

export type RepliesOf = Record<string, CommentOrReply[]>;

export type Credentials = Readonly<{ email: string; password: string }>;

export type Notification = {
  id: string;
  action: 'reply' | 'vote' | 'mention';
  type: 'comment' | 'reply';
  seen: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
  targetId: string;
  targetOwnerId: string;
  content: string;
  user: {
    username: string;
    image: string;
  };
  comment: {
    content: string;
  };
  reply: {
    content: string;
  };
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentOrReply, CommentsOrReplies, Mentions, Notification, RepliesOf, Reply, Votes } from '@/src/types';
import { AppDispatch } from '@/src/store';
import api from '@/src/axios';
import mapNestedRepliesToRepliesOf from '@/src/libs/mapNestedRepliesToReplyOf';
import sleep from '@/src/libs/sleep';

type State = {
  isFetching: boolean;
  isFetchingRepliesOf: boolean;
  comments: CommentOrReply[];
  repliesOf: RepliesOf;
  parents: Record<string, Reply>;
};

type EditCommentOrReplyActionPayload = {
  parentId?: string;
  id: string;
  data: {
    content?: string;
    score?: number;
    votes?: Votes;
    mentions?: Mentions;
  };
};

type NotifyFunc = (data: Notification) => void;
type NotifyMentionedUsersFunc = (data: Notification[]) => void;

const slice = createSlice({
  name: 'commentsOrReplies',
  initialState: {
    isFetching: false,
    isFetchingRepliesOf: false,
    comments: [],
    repliesOf: {},
    parents: {}
  } as State,
  reducers: {
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setIsFetchingRepliesOf(state, action: PayloadAction<boolean>) {
      state.isFetchingRepliesOf = action.payload;
    },
    setComments(state, action: PayloadAction<{ comments: CommentOrReply[]; repliesOf: RepliesOf }>) {
      state.comments = action.payload.comments;
      state.repliesOf = action.payload.repliesOf;
      state.isFetching = false;
    },
    mergeRepliesOf(state, action: PayloadAction<{ repliesOf: RepliesOf; repliesParent: Reply }>) {
      Object.assign(state.repliesOf, action.payload.repliesOf);
      Object.assign(state.parents, { [action.payload.repliesParent.id]: action.payload.repliesParent });
      state.isFetchingRepliesOf = false;
    },
    appendComment(state, action: PayloadAction<CommentOrReply>) {
      state.comments.push(action.payload);
    },
    appendReply(state, action: PayloadAction<CommentOrReply & { parentOfParentId: string }>) {
      const reply = action.payload;
      const parentId = [reply.parentCommentId, reply.parentReplyId].filter(Boolean).join('');
      let replies = state.repliesOf[parentId];
      if (!replies) {
        state.repliesOf[parentId] = [reply];
        if (reply.parentOfParentId) {
          const parentOfParentReplies = state.repliesOf[reply.parentOfParentId] ?? [];
          let idx = 0;
          for (const __reply of parentOfParentReplies) {
            if (__reply.id === parentId) {
              parentOfParentReplies[idx].hasReplies = true;
              return;
            }
            idx++;
          }
        }
      } else replies.push(reply);
    },
    deleteComment(state, action: PayloadAction<string>) {
      const id = action.payload;
      const commentIdx = state.comments.findIndex(comment => comment.id === id);
      state.comments.splice(commentIdx, 1);
      if (commentIdx !== -1 && state.repliesOf[id]) {
        delete state.repliesOf[id];
      }
    },
    deleteReply(state, action: PayloadAction<{ id: string; type: 'reply' | 'repliesParent' }>) {
      const { id, type } = action.payload;
      if (type === 'repliesParent') {
        delete state.parents[id];
      } else {
        delete state.repliesOf[id];
      }

      const __replies = Object.values(state.repliesOf);
      for (const replies of __replies) {
        const replyIdx = replies.findIndex(reply => reply.id === id);
        if (replyIdx !== -1) {
          const reply = replies[replyIdx];
          const parentId = [reply!.parentCommentId, reply!.parentReplyId].filter(Boolean).join('');
          state.repliesOf[parentId].splice(replyIdx, 1);
          return;
        }
      }
    },
    updateComment(state, action: PayloadAction<EditCommentOrReplyActionPayload>) {
      const commentIdx = state.comments.findIndex(comment => comment.id === action.payload.id);
      if (commentIdx !== -1) Object.assign(state.comments[commentIdx], action.payload.data);
    },
    updateReply(
      state,
      action: PayloadAction<
        Omit<EditCommentOrReplyActionPayload, 'parentId'> & {
          parentId: string;
        }
      >
    ) {
      const replies = state.repliesOf[action.payload.parentId!] ?? [];
      const replyIdx = replies.findIndex(reply => reply.id === action.payload.id);
      if (replyIdx !== -1) Object.assign(replies[replyIdx], action.payload.data);
    }
  }
});

export const commentsOrRepliesReducer = slice.reducer;

function getComments() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setIsFetching(true));
    const response = await api.get<CommentsOrReplies>('/comments');
    await sleep(500);
    dispatch(
      slice.actions.setComments({
        comments: response.data,
        repliesOf: mapNestedRepliesToRepliesOf({}, response.data, 1)
      })
    );
  };
}

function getRepliesOf(parentCommentOrReplyId: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setIsFetchingRepliesOf(true));
    const response = await api.get<CommentsOrReplies['0']>('/repliesOf/' + parentCommentOrReplyId);
    const { replies, ...repliesParent } = response.data;
    await sleep(500);
    dispatch(
      slice.actions.mergeRepliesOf({
        repliesOf: mapNestedRepliesToRepliesOf({}, [{ replies, ...repliesParent }], 1),
        repliesParent
      })
    );
  };
}

function addComment(content: string, notifyMentionUsers: NotifyMentionedUsersFunc) {
  return async (dispatch: AppDispatch) => {
    const response = await api.post<CommentOrReply & { notifications: Notification[] }>('/comments', { content });
    const { notifications, ...data } = response.data;
    notifyMentionUsers(notifications);
    dispatch(slice.actions.appendComment(data));
    return data;
  };
}

function addReply(reply: Partial<Reply>, notify: NotifyFunc, notifyMentionUsers: NotifyMentionedUsersFunc) {
  return async (dispatch: AppDispatch) => {
    const response = await api.post<
      CommentOrReply & {
        parentOfParentId: string;
        notification: Notification;
        notifications: Notification[];
      }
    >('/replies', reply);
    const { notification, notifications, ...data } = response.data;
    notify(notification);
    notifyMentionUsers(notifications);
    dispatch(slice.actions.appendReply(data));
    return data;
  };
}

function removeComment(id: string) {
  return async (dispatch: AppDispatch) => {
    await api.delete('/comments?id=' + id);
    dispatch(slice.actions.deleteComment(id));
    return id;
  };
}

function removeReply(id: string, type: 'reply' | 'repliesParent') {
  return async (dispatch: AppDispatch) => {
    await api.delete('/replies?id=' + id);
    dispatch(slice.actions.deleteReply({ id, type }));
    return { id, type };
  };
}

function editComment(id: string, content: string, notifyMentionUsers: NotifyMentionedUsersFunc) {
  return async (dispatch: AppDispatch) => {
    const response = await api.put<{
      notifications: Notification[];
      mentions: Mentions;
    }>('/comments?id=' + id, {
      content
    });
    notifyMentionUsers(response.data.notifications);
    dispatch(
      slice.actions.updateComment({
        id,
        data: {
          content,
          mentions: response.data.mentions
        }
      })
    );
    return {
      id,
      data: {
        content,
        mentions: response.data.mentions
      }
    };
  };
}

function editReply(parentId: string, id: string, content: string, notifyMentionUsers: NotifyMentionedUsersFunc) {
  return async (dispatch: AppDispatch) => {
    const response = await api.put<{
      notifications: Notification[];
      mentions: Mentions;
    }>('/replies?id=' + id, {
      content
    });
    notifyMentionUsers(response.data.notifications);
    dispatch(slice.actions.updateReply({ id, data: { content, mentions: response.data.mentions }, parentId }));
    return { id, data: { content, mentions: response.data.mentions }, parentId };
  };
}

function vote(notify: NotifyFunc, id: string, type: string, amount: -1 | 1, score: number, parentId?: string) {
  return async (dispatch: AppDispatch) => {
    if (type === 'comment') {
      const response = await api.patch('/comments/vote?id=' + id, {
        amount,
        id
      });
      dispatch(slice.actions.updateComment({ id, data: { score: score + amount, votes: [{ amount }] } }));
      notify(response.data.notification);
      return { type, id, data: { score: score + amount, votes: [{ amount }] } };
    } else {
      const response = await api.patch('/replies/vote?id=' + id, {
        amount,
        id
      });
      dispatch(
        slice.actions.updateReply({
          id,
          parentId: parentId!,
          data: { score: score + amount, votes: [{ amount }] }
        })
      );
      notify(response.data.notification);
      return {
        type,
        id,
        parentId: parentId!,
        data: { score: score + amount, votes: [{ amount }] }
      };
    }
  };
}

export const commentsOrRepliesActions = {
  ...slice.actions,
  getComments,
  getRepliesOf,
  addComment,
  addReply,
  removeComment,
  removeReply,
  editComment,
  editReply,
  vote
};

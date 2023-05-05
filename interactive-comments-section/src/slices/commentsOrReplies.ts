import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentOrReply, RepliesOf, Reply } from '@/src/types';
import { AppDispatch } from '@/src/store';
import axios from 'axios';

type State = {
  comments: CommentOrReply[];
  repliesOf: RepliesOf;
  parents: Record<string, Reply>;
};

const slice = createSlice({
  name: 'commentsOrReplies',
  initialState: {
    comments: [],
    repliesOf: {},
    parents: {}
  } as State,
  reducers: {
    setComments(state, action: PayloadAction<{ comments: CommentOrReply[]; repliesOf: RepliesOf }>) {
      state.comments = action.payload.comments;
      state.repliesOf = action.payload.repliesOf;
    },
    addRepliesOf(state, action: PayloadAction<{ repliesOf: RepliesOf; repliesParent: Reply }>) {
      Object.assign(state.repliesOf, action.payload.repliesOf);
      Object.assign(state.parents, { [action.payload.repliesParent.id]: action.payload.repliesParent });
    }
  }
});

export const commentsOrRepliesReducer = slice.reducer;

function getComments() {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get<{
      comments: CommentOrReply[];
      repliesOf: RepliesOf;
    }>('/api/comments');

    dispatch(slice.actions.setComments({ comments: response.data.comments, repliesOf: response.data.repliesOf }));
  };
}

function getRepliesOf(parentCommentOrReplyId: string) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get<{
      repliesOf: RepliesOf;
      repliesParent: Reply;
    }>('/api/repliesOf/' + parentCommentOrReplyId);
    dispatch(slice.actions.addRepliesOf(response.data));
  };
}

export const commentsOrRepliesActions = { ...slice.actions, getComments, getRepliesOf };

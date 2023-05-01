import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment as CommentType, Comment, Reply } from '@/src/types';
import { AppDispatch } from '@/src/store';
import axios from 'axios';

type commentOrReplyState = Comment & Reply;

type State = {
  comments: commentOrReplyState[];
  repliesOf: Record<string, commentOrReplyState[]>;
};

const slice = createSlice({
  name: 'comments/replies',
  initialState: {
    comments: [],
    repliesOf: {}
  } as State,
  reducers: {
    setComments(state, action: PayloadAction<commentOrReplyState[]>) {
      state.comments = action.payload;
    },
    setReplies(state, action: PayloadAction<{ replies: commentOrReplyState[]; parentCommentOrReplyId: string }>) {
      state.repliesOf[action.payload.parentCommentOrReplyId] = action.payload.replies;
    }
  }
});

export const commentsOrRepliesReducer = slice.reducer;

function getComments(page: number) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get<CommentType[]>('/api/comments');
    dispatch(slice.actions.setComments(response.data));
  };
}

function getReplies(page: number, parentCommentOrReplyId: string) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get<Reply[]>(`/api/comments/${parentCommentOrReplyId}/replies`);
    dispatch(slice.actions.setReplies({ replies: response.data, parentCommentOrReplyId }));
  };
}

export const commentsOrRepliesActions = { ...slice.actions, getComments, getReplies };

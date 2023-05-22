import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { commentsOrRepliesReducer } from '@/src/slices/commentsOrReplies';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { dialogsReducer } from '@/src/slices/dialogs';

const store = configureStore({
  reducer: {
    commentsOrReplies: commentsOrRepliesReducer,
    dialogs: dialogsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = ThunkDispatch<RootState, any, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
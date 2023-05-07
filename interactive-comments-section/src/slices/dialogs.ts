import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DIALOGS } from '@/src/constants';

type Details = Record<string, any>;
type State = Record<string, { open: boolean; details: Details }>;

const slice = createSlice({
  name: 'dialogs',
  initialState: {
    [DIALOGS['DELETE_COMMENTS/DELETE_REPLIES']]: {
      open: false,
      details: {}
    },
    [DIALOGS['ADD_COMMENT']]: {
      open: false,
      details: {}
    }
  } as State,
  reducers: {
    openDialog(state, action: PayloadAction<string | { dialogId: string; details: Details }>) {
      let payload = action.payload;

      if (typeof payload === 'string') {
        payload = {
          dialogId: payload,
          details: {}
        };
      }

      state[payload.dialogId].open = true;
      state[payload.dialogId].details = payload.details;
    },
    closeDialog(state, action: PayloadAction<string>) {
      state[action.payload].open = false;
    }
  }
});

export const dialogsReducer = slice.reducer;

export const dialogsActions = slice.actions;

export default slice;

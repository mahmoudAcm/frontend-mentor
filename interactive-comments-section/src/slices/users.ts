import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/src/types';
import { AppDispatch } from '@/src/store';
import api from '@/src/axios';

type State = {
  users: User[];
};

const slice = createSlice({
  name: 'users',
  initialState: {
    users: []
  } as State,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    }
  }
});

export const usersReducer = slice.reducer;

function getFirst20Users() {
  return async (dispatch: AppDispatch) => {
    const response = await api.get<User[]>('users?limit=20');
    dispatch(slice.actions.setUsers(response.data));
  };
}

export const usersActions = { ...slice.actions, getFirst20Users };

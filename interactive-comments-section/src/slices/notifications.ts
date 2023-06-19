import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '@/src/store';
import api from '@/src/axios';
import { Notification } from '@/src/types';
import sleep from '@/src/libs/sleep';

type State = {
  isFetching: boolean;
  unreadCount: number;
  notifications: Notification[];
};

const slice = createSlice({
  name: 'notifications',
  initialState: {
    isFetching: false,
    unreadCount: 0,
    notifications: []
  } as State,
  reducers: {
    setNotifications(state, action: PayloadAction<Notification[]>) {
      state.isFetching = false;
      state.notifications = action.payload;
      state.unreadCount = action.payload.filter(notification => !notification.seen).length;
    },
    appendNotification(state, action: PayloadAction<Notification>) {
      state.notifications.unshift(action.payload);
      state.unreadCount++;
    },
    markAllAsSeen(state) {
      state.unreadCount = 0;
      state.notifications = state.notifications.map(notification => ({
        ...notification,
        seen: true
      }));
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    }
  }
});

export const notificationsReducer = slice.reducer;

function getNotifications() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setIsFetching(true));
    const response = await api.get<Notification[]>('/notifications');
    await sleep(500);
    dispatch(slice.actions.setNotifications(response.data));
  };
}

function markAll() {
  return async (dispatch: AppDispatch) => {
    await api.post<Notification[]>('/notifications');
    dispatch(slice.actions.markAllAsSeen());
  };
}

export const notificationsActions = { ...slice.actions, getNotifications, markAll };

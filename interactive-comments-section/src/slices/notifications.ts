import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '@/src/store';
import api from '@/src/axios';

type Notification = {
  seen?: boolean;
  type: 'comment' | 'reply';
  action: 'reply' | 'vote' | 'mention';
  content: string;
  createdAt: number;
  user: {
    image: string;
    username: string;
  };
};

type State = {
  unreadCount: number;
  notifications: Notification[];
};

const slice = createSlice({
  name: 'notifications',
  initialState: {
    unreadCount: 0,
    notifications: []
  } as State,
  reducers: {
    setNotifications(state, action: PayloadAction<Notification[]>) {
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
    }
  }
});

export const notificationsReducer = slice.reducer;

function getNotifications() {
  return async (dispatch: AppDispatch) => {
    const response = await api.get<Notification[]>('/notifications');
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

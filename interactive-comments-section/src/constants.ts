export const DIALOGS = {
  'DELETE_COMMENTS/DELETE_REPLIES': 'DELETE_COMMENTS/DELETE_REPLIES',
  ADD_COMMENT: 'ADD_COMMENT'
};

export const LOCAL_STORAGE_KEYS = {
  DEMO_USER: 'demo-user'
};

export const CALLBACK_URL = 'http://localhost:3000';

export const MAX_AGE = 30 * 24 * 60 * 60;

export const SOCKET_EVENTS = {
  JOIN: 'join',
  LEAVE: 'leave',
  COMMENT: 'comment',
  REPLY: 'reply',
  DEL_COMMENT: 'del_comment',
  DEL_REPLY: 'del_reply',
  EDIT_COMMENT: 'edit_comment',
  EDIT_REPLY: 'edit_reply',
  VOTE: 'vote',
  NOTIFICATION: 'notification',
  MARK_NOTIFICATIONS_AS_READ: 'read_notification',
  NOTIFY_MENTIONED_USERS: 'notify_mentioned_users'
};

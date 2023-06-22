import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import { SOCKET_EVENTS } from '@/src/constants';
import useAuthContext from '@/src/hooks/useAuthContext';
import { notificationsActions } from '@/src/slices/notifications';
import { AxiosError } from 'axios';
import { usersActions } from '@/src/slices/users';
import { Notification } from '@/src/types';

type Socket = ReturnType<typeof io>;
type State = {
  emit: (name: string, data: any) => void;
  notify: (data: Notification) => void;
  notifyMentionedUsers: (data: Notification[]) => void;
};
type CommentsOrRepliesActions = typeof commentsOrRepliesActions;
type NotificationsActions = typeof notificationsActions;

type CommentsOrRepliesPayload<action extends keyof CommentsOrRepliesActions> = ReturnType<
  CommentsOrRepliesActions[action]
>;
type NotificationsPayload<action extends keyof NotificationsActions> = ReturnType<NotificationsActions[action]>;

export const SocketContext = createContext<State | null>(null);

export default function SocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const dispatch = useAppDispatch();
  const {
    status,
    user: { email },
    logout
  } = useAuthContext();

  useEffect(() => {
    if (status !== 'authenticated') return;
    fetch('/api/socket').then(() => {
      setSocket(
        io({
          path: '/api/socket_io'
        })
      );
    });
  }, [status]);

  function onConnect() {
    console.log('client is online');
  }

  function onDisconnect() {
    console.log('client is offline');
  }

  const onComment = useCallback(
    (data: CommentsOrRepliesPayload<'appendComment'>['payload']) => {
      dispatch(commentsOrRepliesActions.appendComment(data));
    },
    [dispatch]
  );

  const onReply = useCallback(
    (data: CommentsOrRepliesPayload<'appendReply'>['payload']) => {
      dispatch(commentsOrRepliesActions.appendReply(data));
    },
    [dispatch]
  );

  const onDeleteComment = useCallback(
    (data: CommentsOrRepliesPayload<'deleteComment'>['payload']) => {
      dispatch(commentsOrRepliesActions.deleteComment(data));
    },
    [dispatch]
  );

  const onDeleteReply = useCallback(
    (data: CommentsOrRepliesPayload<'deleteReply'>['payload']) => {
      dispatch(commentsOrRepliesActions.deleteReply(data));
    },
    [dispatch]
  );

  const onEditComment = useCallback(
    (data: CommentsOrRepliesPayload<'updateComment'>['payload']) => {
      dispatch(commentsOrRepliesActions.updateComment(data));
    },
    [dispatch]
  );

  const onEditReply = useCallback(
    (data: CommentsOrRepliesPayload<'updateReply'>['payload']) => {
      dispatch(commentsOrRepliesActions.updateReply(data));
    },
    [dispatch]
  );

  const onVote = useCallback(
    (
      data: CommentsOrRepliesPayload<'updateComment' | 'updateReply'>['payload'] & {
        type: 'comment' | 'reply';
      }
    ) => {
      const { type, ...rest } = data;
      if (type === 'comment') {
        dispatch(commentsOrRepliesActions.updateComment(rest as CommentsOrRepliesPayload<'updateComment'>['payload']));
      } else {
        dispatch(commentsOrRepliesActions.updateReply(rest as CommentsOrRepliesPayload<'updateReply'>['payload']));
      }
    },
    [dispatch]
  );

  const onNotification = useCallback(
    (data: NotificationsPayload<'appendNotification'>['payload']) => {
      dispatch(notificationsActions.appendNotification(data));
    },
    [dispatch]
  );

  const onMarkNotification = useCallback(() => {
    dispatch(notificationsActions.markAllAsSeen());
  }, [dispatch]);

  const onNotifyMentionedUsers = useCallback(
    (notifications: NotificationsPayload<'appendNotification'>['payload'][]) => {
      for (const notification of notifications) dispatch(notificationsActions.appendNotification(notification));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!socket) return;
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on(SOCKET_EVENTS.COMMENT, onComment);
    socket.on(SOCKET_EVENTS.REPLY, onReply);
    socket.on(SOCKET_EVENTS.DEL_COMMENT, onDeleteComment);
    socket.on(SOCKET_EVENTS.DEL_REPLY, onDeleteReply);
    socket.on(SOCKET_EVENTS.EDIT_COMMENT, onEditComment);
    socket.on(SOCKET_EVENTS.EDIT_REPLY, onEditReply);
    socket.on(SOCKET_EVENTS.VOTE, onVote);
    socket.on(SOCKET_EVENTS.NOTIFICATION, onNotification);
    socket.on(SOCKET_EVENTS.MARK_NOTIFICATIONS_AS_READ, onMarkNotification);
    socket.on(SOCKET_EVENTS.NOTIFY_MENTIONED_USERS, onNotifyMentionedUsers);

    return () => {
      if (!socket) return;
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off(SOCKET_EVENTS.COMMENT, onComment);
      socket.off(SOCKET_EVENTS.REPLY, onReply);
      socket.off(SOCKET_EVENTS.DEL_COMMENT, onDeleteComment);
      socket.off(SOCKET_EVENTS.DEL_REPLY, onDeleteReply);
      socket.off(SOCKET_EVENTS.EDIT_COMMENT, onEditComment);
      socket.off(SOCKET_EVENTS.EDIT_REPLY, onEditReply);
      socket.off(SOCKET_EVENTS.VOTE, onVote);
      socket.off(SOCKET_EVENTS.NOTIFICATION, onNotification);
      socket.off(SOCKET_EVENTS.MARK_NOTIFICATIONS_AS_READ, onMarkNotification);
      socket.off(SOCKET_EVENTS.NOTIFY_MENTIONED_USERS, onNotifyMentionedUsers);
    };
  }, [
    onComment,
    onDeleteComment,
    onDeleteReply,
    onEditComment,
    onEditReply,
    onReply,
    onVote,
    onNotification,
    onMarkNotification,
    onNotifyMentionedUsers,
    socket
  ]);

  const emit = useCallback(
    (name: string, data: any) => {
      if (socket) {
        socket.emit(name, data);
      }
    },
    [socket]
  );

  const notify = useCallback(
    (data: Notification) => {
      if (socket) {
        socket.emit(SOCKET_EVENTS.NOTIFICATION, data);
      }
    },
    [socket]
  );

  const notifyMentionedUsers = useCallback(
    (data: Notification[]) => {
      if (socket) {
        socket.emit(SOCKET_EVENTS.NOTIFY_MENTIONED_USERS, data);
      }
    },
    [socket]
  );

  useEffect(() => {
    emit(SOCKET_EVENTS.JOIN, email);
    return () => {
      emit(SOCKET_EVENTS.LEAVE, email);
    };
  }, [email, emit]);

  useEffect(() => {
    if (status !== 'authenticated') return;
    dispatch(notificationsActions.getNotifications()).catch(error => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) logout();
      }
    });
  }, [dispatch, logout, status]);

  useEffect(() => {
    if (status !== 'authenticated') return;
    dispatch(usersActions.getFirst20Users()).catch(error => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) logout();
      }
    });
  }, [dispatch, logout, status]);

  return <SocketContext.Provider value={{ emit, notify, notifyMentionedUsers }}>{children}</SocketContext.Provider>;
}

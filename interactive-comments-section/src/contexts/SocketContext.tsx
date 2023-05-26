import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import { SOCKET_EVENTS } from '@/src/constants';

type Socket = ReturnType<typeof io>;
type State = {
  emit: (name: string, data: any) => void;
};
type CommentsOrRepliesActions = typeof commentsOrRepliesActions;
type Payload<action extends keyof CommentsOrRepliesActions> = ReturnType<CommentsOrRepliesActions[action]>;

export const SocketContext = createContext<State | null>(null);

export default function SocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('/api/socket').then(() => {
      setSocket(
        io({
          path: '/api/socket_io'
        })
      );
    });
  }, []);

  function onConnect() {
    console.log('client is online');
  }

  function onDisconnect() {
    console.log('client is offline');
  }

  const onComment = useCallback(
    (data: Payload<'appendComment'>['payload']) => {
      dispatch(commentsOrRepliesActions.appendComment(data));
    },
    [dispatch]
  );

  const onReply = useCallback(
    (data: Payload<'appendReply'>['payload']) => {
      dispatch(commentsOrRepliesActions.appendReply(data));
    },
    [dispatch]
  );

  const onDeleteComment = useCallback(
    (data: Payload<'deleteComment'>['payload']) => {
      dispatch(commentsOrRepliesActions.deleteComment(data));
    },
    [dispatch]
  );

  const onDeleteReply = useCallback(
    (data: Payload<'deleteReply'>['payload']) => {
      dispatch(commentsOrRepliesActions.deleteReply(data));
    },
    [dispatch]
  );

  const onEditComment = useCallback(
    (data: Payload<'updateComment'>['payload']) => {
      dispatch(commentsOrRepliesActions.updateComment(data));
    },
    [dispatch]
  );

  const onEditReply = useCallback(
    (data: Payload<'updateReply'>['payload']) => {
      dispatch(commentsOrRepliesActions.updateReply(data));
    },
    [dispatch]
  );

  const onVote = useCallback(
    (
      data: Payload<'updateComment' | 'updateReply'>['payload'] & {
        type: 'comment' | 'reply';
      }
    ) => {
      const { type, ...rest } = data;
      if (type === 'comment') {
        dispatch(commentsOrRepliesActions.updateComment(rest as Payload<'updateComment'>['payload']));
      } else {
        dispatch(commentsOrRepliesActions.updateReply(rest as Payload<'updateReply'>['payload']));
      }
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
    };
  }, [onComment, onDeleteComment, onDeleteReply, onEditComment, onEditReply, onReply, onVote, socket]);

  const emit = useCallback(
    (name: string, data: any) => {
      if (socket) {
        socket.emit(name, data);
      }
    },
    [socket]
  );

  return <SocketContext.Provider value={{ emit }}>{children}</SocketContext.Provider>;
}

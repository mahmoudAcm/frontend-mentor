import { Server, Socket } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';
import { SOCKET_EVENTS } from '@/src/constants';
import prisma from '../../../prisma/client';

export default function SocketHandler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the socket server was already initialized
  if ((res.socket as any).server?.io) {
    console.log('Already set up');
    res.end();
    return;
  }

  const io = new Server((res.socket as any).server, {
    path: '/api/socket_io',
    addTrailingSlash: false
  });
  (res.socket as any).server.io = io;

  const onConnection = (socket: Socket) => {
    // Define actions inside the connection event
    console.log('connected');

    socket.on(SOCKET_EVENTS.JOIN, roomId => {
      socket.join(roomId);
    });

    socket.on(SOCKET_EVENTS.LEAVE, roomId => {
      socket.leave(roomId);
    });

    socket.on(SOCKET_EVENTS.COMMENT, data => {
      socket.broadcast.emit(SOCKET_EVENTS.COMMENT, data);
    });

    socket.on(SOCKET_EVENTS.REPLY, data => {
      socket.broadcast.emit(SOCKET_EVENTS.REPLY, data);
    });

    socket.on(SOCKET_EVENTS.DEL_COMMENT, data => {
      socket.broadcast.emit(SOCKET_EVENTS.DEL_COMMENT, data);
    });

    socket.on(SOCKET_EVENTS.DEL_REPLY, data => {
      socket.broadcast.emit(SOCKET_EVENTS.DEL_REPLY, data);
    });

    socket.on(SOCKET_EVENTS.EDIT_COMMENT, data => {
      socket.broadcast.emit(SOCKET_EVENTS.EDIT_COMMENT, data);
    });

    socket.on(SOCKET_EVENTS.EDIT_REPLY, data => {
      socket.broadcast.emit(SOCKET_EVENTS.EDIT_REPLY, data);
    });

    socket.on(SOCKET_EVENTS.VOTE, data => {
      socket.broadcast.emit(SOCKET_EVENTS.VOTE, data);
    });

    socket.on(SOCKET_EVENTS.NOTIFICATION, async data => {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id: data.targetOwnerId
        },
        select: {
          email: true
        }
      });
      socket.to(user.email).emit(SOCKET_EVENTS.NOTIFICATION, data);
    });

    socket.on(SOCKET_EVENTS.MARK_NOTIFICATIONS_AS_READ, roomId => {
      socket.broadcast.to(roomId).emit(SOCKET_EVENTS.MARK_NOTIFICATIONS_AS_READ);
    });
  };

  // Define actions inside
  io.on('connection', onConnection);

  console.log('Setting up socket');
  res.end();
}

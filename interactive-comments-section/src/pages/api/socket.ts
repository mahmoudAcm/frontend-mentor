import { Server, Socket } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';
import { SOCKET_EVENTS } from '@/src/constants';

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
  };

  // Define actions inside
  io.on('connection', onConnection);

  console.log('Setting up socket');
  res.end();
}

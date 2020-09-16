import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';
import socket from 'socket.io';

import { IMessageData } from './@types/server';
import generateId from './utils/generateId';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socket(server);

const { SERVER_HOST } = process.env;
const SERVER_PORT = Number(process.env.SERVER_PORT);

const adminId = generateId();

io.on('connection', socket => {
  const clientUserName = socket.handshake.query.user as string;

  let adminMessage: IMessageData = {
    userId: adminId,
    message: `Welcome ${clientUserName}`,
    userName: 'Admin',
  };
  io.emit('chat.message', adminMessage);

  socket.on('chat.message', (messageData: IMessageData) => {
    io.emit('chat.message', messageData);
  });

  socket.on('disconnect', () => {
    adminMessage.message = `${clientUserName} disconnected`;
    io.emit('chat.message', adminMessage);
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`🚀 Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});

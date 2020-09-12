import express from 'express';
import http from 'http';
import cors from 'cors';
import socket from 'socket.io';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socket(server);

const SERVER_HOST = 'localhost';
const SERVER_PORT = 3333;

io.on('connection', socket => {
  console.log('New socket.io connection');

  socket.on('chat.message', messageData => {
    io.emit('chat.message', messageData);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected from socket.io');
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`🚀 Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});

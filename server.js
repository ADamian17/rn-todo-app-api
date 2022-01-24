const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

io.on('connection', (socket) => {
  socket.on('task added', msg => {
    io.emit('task added', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
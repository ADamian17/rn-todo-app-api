const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.render('index.ejs');
});

io.on('connection', (socket) => {
  socket.on('task added', msg => {
    io.emit('task added', msg);
  });
});

server.listen(PORT, () => {
  console.log('listening on *:3000');
});
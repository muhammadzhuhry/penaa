const express = require('express');
const app = express();
const moment = require('moment');

const  time = moment().format("DD/MM/YYYY hh:mm:ss a");

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

const port = 9000;
const server = app.listen(port, () => {
  console.log(`Server started at port ${port} on ${time}`);
})

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('New user connected');
});
const express = require('express');
const app = express();
const moment = require('moment');

const  time = moment().format("DD/MM/YYYY hh:mm:ss a");


app.get('/', (req, res) => {
  res.send('welcome to Penaa');
});

const port = 9000;
app.listen(port, () => {
  console.log(`Server started at port ${port} on ${time}`);
})
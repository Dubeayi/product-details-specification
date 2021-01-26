const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const server = express();
server.use(morgan('dev'));
server.use(bodyparser.json());

const route = require('./route.js');

server.use(express.static(path.join(__dirname, '..', '/react-client/dist/')));
server.use('/', route);

const PORT = 3005;

server.listen(PORT, () => {
  console.log('Listening on localhost:3005');
});

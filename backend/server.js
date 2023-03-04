const express = require('express');
require('express-async-errors');
const cors = require('cors');

const server = express();
const mindmapRouter = require('./controllers/mindmap');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');


server.use(cors());
server.use(express.json());
server.use(middleware.requestLogger);

server.use('/', mindmapRouter);

server.use(middleware.unknownEndpoint);
server.use(middleware.errorHandler);

module.exports = server;

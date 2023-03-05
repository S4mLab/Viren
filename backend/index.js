const http = require('http');
const server = require('./server');
const config = require('./utils/config');
const logger = require('./utils/logger');

const virenServer = http.createServer(server);

virenServer.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

require("dotenv").config({ path: __dirname + "/.env" });
const { logger } = require('./utils/logger');
const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT, () => logger.info(`Magic happening on port: ${PORT}`));


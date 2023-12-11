const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "../../error.log", level: "error" }),
    new winston.transports.File({ filename: "../../combined.log", level: "info" }),
  ],
});

logger.log("info", "it's a test info message");
logger.error("it's an error test message");

module.exports = logger;

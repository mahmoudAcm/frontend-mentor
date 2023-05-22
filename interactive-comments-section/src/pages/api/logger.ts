import winston, { format } from 'winston';
import combine = format.combine;
import timestamp = format.timestamp;
import label = format.label;

const logger = winston.createLogger({
  level: 'error',
  format: combine(
    winston.format.colorize(),
    label({
      message: true,
      label: 'server'
    }),
    timestamp(),
    format.simple()
  ),
  transports: [new winston.transports.Console({})]
});

export default logger;

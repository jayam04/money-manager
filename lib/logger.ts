import pino from 'pino';

const isDev = process.env.NODE_ENV === 'development';
const logger = pino({ enabled: isDev });

export default logger;

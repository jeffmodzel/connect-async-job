import * as winston from 'winston';

export class LoggerFactory {
  private static instance: LoggerFactory;
  private static logger: winston.Logger;

  private constructor() {
    LoggerFactory.logger = winston.createLogger({
      level: process.env.LOG_LEVEL || 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: winston.format.simple()
        })
      ]
    });
  }

  public static getLogger(): winston.Logger {
    if (!LoggerFactory.instance) {
      LoggerFactory.instance = new LoggerFactory();
    }
    return LoggerFactory.logger;
  }
}
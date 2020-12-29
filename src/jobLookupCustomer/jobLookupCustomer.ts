import AWS from 'aws-sdk';
import * as winston from 'winston';
import {LoggerFactory} from '../lib/loggerFactory';

import {AttributeMap} from '../interfaces';

export class JobLookupCustomer {
  logger: winston.Logger;

  constructor(private dynamodb: AWS.DynamoDB.DocumentClient) {
    this.logger = LoggerFactory.getLogger();
    this.logger.info('JobLookupCustomer.constructor()');
  }

  public async handler(event: any): Promise<AttributeMap> {
    this.logger.info('handler()');
    this.logger.info(JSON.stringify(event));

    try {
      this.logger.info(JSON.stringify(event));
    } catch (error) {
      this.logger.error('Error occurred in Lambda');
      this.logger.error(error);
    }

    return { success: 'true'};
  }
}

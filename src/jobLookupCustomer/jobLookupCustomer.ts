//import AWS from 'aws-sdk';
import * as winston from 'winston';
import {LoggerFactory} from '../lib/loggerFactory';
import {AttributeMap} from '../interfaces';
import {DynamoService} from '../services/dynamoService';
export class JobLookupCustomer {
  logger: winston.Logger;
  tableName: string;

  constructor(private dynamoService: DynamoService) {
    this.logger = LoggerFactory.getLogger();
    this.logger.info('JobLookupCustomer.constructor()');
    this.tableName = process.env['JOB_TABLE'] as string;
  }

  public async handler(event: any): Promise<AttributeMap> {
    this.logger.info('handler()');
    this.logger.info(JSON.stringify(event));

    try {
      const item:any = await this.dynamoService.getJob(event.JobId);
      this.logger.info(JSON.stringify(item));
      await this.dynamoService.updateStatus(event.JobId, 'In Progress', 'we started it!');
      this.dynamoService.doSomething();
    } catch (error) {
      this.logger.error('Error occurred in Lambda');
      this.logger.error(error);
    }

    return {success: 'true'};
  }

}

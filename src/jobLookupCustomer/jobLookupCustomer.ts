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
      await this.dynamoService.updateStatus(event.JobId, 'In Progress', 'Lookup Customer job started...');

      this.logger.info('Start simulate long running tasks...');
      await new Promise(resolve => setTimeout(resolve, 10000));
      const fakeResult: any = {
        customerId: 123,
        customerName: 'John Smith',
        customerStatus: 'Good',
        someOtherField: 'Some other value'
      };
      this.logger.info('End simulate long running tasks');

      await this.dynamoService.updateResult(event.JobId, JSON.stringify(fakeResult));
      await this.dynamoService.updateStatus(event.JobId, 'Complete', 'Lookup Customer job success');
    } catch (error) {
      this.logger.error('Error occurred in Lambda');
      this.logger.error(error);
      await this.dynamoService.updateStatus(event.JobId, 'Error', 'Error in JobLookupCustomer.handler()');
    }

    return {'success': 'true'};
  }

}

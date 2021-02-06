//import AWS from 'aws-sdk';
import * as winston from 'winston';
import {LoggerFactory} from '../lib/loggerFactory';
import {AttributeMap} from '../interfaces';
import {DynamoService} from '../services/dynamoService';

//
// Simulates a long running task (a "job") of looking up customer data
//

export interface Result {
  WaitSeconds: number; 
  MessageSSML: string;
  CustomerData: string;
}
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

      // Generate a random time between 10 and 30 seconds, and wait
      this.logger.info('Start simulate long running tasks...');      
      const waitSeconds: number = 10 + Math.floor(Math.random() * 21);
      await new Promise(resolve => setTimeout(resolve, waitSeconds * 1000));

      const result: Result = {
        WaitSeconds: waitSeconds,
        MessageSSML: `<speak>This simulated customer lookup job took ${waitSeconds} seconds</speak>`,
        CustomerData: 'some customer data'
      };
      this.logger.info('End simulate long running tasks');

      await this.dynamoService.updateResult(event.JobId, JSON.stringify(result));
      await this.dynamoService.updateStatus(event.JobId, 'Complete', 'Lookup Customer job success');
    } catch (error) {
      this.logger.error('Error occurred in Lambda');
      this.logger.error(error);
      await this.dynamoService.updateStatus(event.JobId, 'Error', 'Error in JobLookupCustomer.handler()');
    }

    return {'success': 'true'};
  }

}

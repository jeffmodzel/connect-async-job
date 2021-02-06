import {ConnectContactFlowEvent} from 'aws-lambda';
import AWS from 'aws-sdk';
import * as winston from 'winston';
import {LoggerFactory} from '../lib/loggerFactory';
import {DynamoService} from '../services/dynamoService';

export interface JobStatusResponse {
  IsComplete: boolean;
  InProgress: boolean;
  HasError: boolean;
  JobExists: boolean;
}
//need to figure out how to add job data?

// add description
//

export class JobStatus {
  logger: winston.Logger;

  constructor(private dynamoService: DynamoService) {
    this.logger = LoggerFactory.getLogger();
    this.logger.info('JobStatus.constructor()');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handler(event: ConnectContactFlowEvent): Promise<JobStatusResponse> {
    this.logger.info('handler()');
    this.logger.info(JSON.stringify(event));

    const response: JobStatusResponse = {
      IsComplete: false,
      InProgress: false,
      HasError: false,
      JobExists: false
    };

    try {
      const jobId: string = event.Details.Parameters.JobId;
      const jobType: string = event.Details.Parameters.JobType;
      
      const jobItem:any = await this.dynamoService.getJob(jobId);
      this.logger.info(JSON.stringify(jobItem));
  
      if (jobItem) {
        response.JobExists = true;
      }

      this.logger.info(JSON.stringify(response));
    } catch (error) {
      this.logger.error('Error occurred in Lambda');
      this.logger.error(error);
    }

    return response;
  }
}

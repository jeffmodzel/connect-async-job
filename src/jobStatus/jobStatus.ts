import { ConnectContactFlowEvent } from 'aws-lambda';
import * as winston from 'winston';
import { LoggerFactory } from '../lib/loggerFactory';
import { DynamoService } from '../services/dynamoService';
import { AttributeMap, JobDynamoItem } from '../interfaces';

export interface JobStatusResponse {
  JobExists: boolean;
  IsComplete: boolean;
  InProgress: boolean;
  HasError: boolean;
  ErrorMessage: string;
  [key: string]: string | boolean | number;
}

//
// Gets a job's status and returns job result, if present
//
export class JobStatus {
  logger: winston.Logger;

  public static readonly CREATED: string = 'CREATED';
  public static readonly COMPLETE: string = 'COMPLETE';
  public static readonly IN_PROGRESS: string = 'IN PROGRESS';
  public static readonly ERROR: string = 'ERROR';

  constructor(private dynamoService: DynamoService) {
    this.logger = LoggerFactory.getLogger();
    this.logger.info('JobStatus.constructor()');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handler(event: ConnectContactFlowEvent): Promise<JobStatusResponse> {
    this.logger.info('JobStatus.handler()');
    this.logger.info(JSON.stringify(event));

    let response: JobStatusResponse = {
      IsComplete: false,
      InProgress: false,
      HasError: false,
      JobExists: false,
      ErrorMessage: ''
    };

    try {
      const jobId: string = event.Details.Parameters.JobId;
      //const jobType: string = event.Details.Parameters.JobType;

      const jobItem: JobDynamoItem = await this.dynamoService.getJob(jobId) as JobDynamoItem;
      this.logger.info(JSON.stringify(jobItem));

      if (jobItem) {
        response.JobExists = true;

        if (jobItem.Status === 'Complete') {
          //response.IsComplete = true;
          //response.Result = JSON.parse(jobItem.Result);
          response = {...response, ...JSON.parse(jobItem.Result) };
          response.IsComplete = true;
        } else if (jobItem.Status === 'In Progress') {
          response.InProgress = true;
        } else if (jobItem.Status === 'Error') {
          response.HasError = true;
          response.ErrorMessage = jobItem.StatusMessage;
        }

      }

      this.logger.info(JSON.stringify(response));
    } catch (error) {
      this.logger.error('Error occurred in Lambda');
      this.logger.error(error);
    }

    return response;
  }
}

import {Context,  ConnectContactFlowEvent} from 'aws-lambda';
import AWS from 'aws-sdk';
import * as winston from 'winston';
import {v4 as uuidv4} from 'uuid';
import {LoggerFactory} from '../lib/loggerFactory';

export interface JobSubmissionResponse {
  success: boolean;
  jobId: string;
  jobType: string;
}
//
// This lambda is called from Connect, creates an SQS queue message (a "job") with Connect Event details 
// and returns immediately with the created Job Id
//
export class JobSubmission {
  logger: winston.Logger;

  constructor() {
    this.logger = LoggerFactory.getLogger();
    this.logger.info('JobSubmission.constructor()');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handler(event: ConnectContactFlowEvent, context: Context): Promise<JobSubmissionResponse> {
    this.logger.info('handler()');
    this.logger.info(JSON.stringify(event));

    const response: JobSubmissionResponse = {
      success: false,
      jobId: '',
      jobType: ''
    };

    try {
      const sqs: AWS.SQS = new AWS.SQS();
      const jobId: string = uuidv4();
      const jobType: string = event.Details.Parameters.JobType;
      const queueUrl: string = String(process.env['QUEUE_URL']);
  
      // this is how to get the QueueUrl from the queue name
      // const params: AWS.SQS.GetQueueUrlRequest = { QueueName: String(process.env['QUEUE'])};
      // const response: AWS.SQS.GetQueueUrlResult = await sqs.getQueueUrl(params).promise();
      
      this.logger.debug(jobId);
      this.logger.debug(jobType);
      this.logger.debug(queueUrl);

      const request: AWS.SQS.SendMessageRequest = {
        QueueUrl: queueUrl,
        MessageBody: JSON.stringify(event),
        MessageAttributes: {
          JobType: {
            DataType: 'String',
            StringValue: jobType
          },
          JobId: {
            DataType: 'String',
            StringValue: jobId
          }
        }
      };

      const result: AWS.SQS.SendMessageResult = await sqs.sendMessage(request).promise();
      this.logger.debug(JSON.stringify(result));

      response.jobId = jobId;
      response.jobType = jobType;
      response.success = true;
      this.logger.info(JSON.stringify(response));
    } catch (error) {
      this.logger.error('Error occurred in Lambda');
      this.logger.error(error);
    }

    return response;
  }
}

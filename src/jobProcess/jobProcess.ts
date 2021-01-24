import AWS from 'aws-sdk';
import * as winston from 'winston';
import {LoggerFactory} from '../lib/loggerFactory';
import {SQSEvent, SQSRecord} from 'aws-lambda';

export interface JobProcessResponse {
  numberOfRecords: number;
}

export class JobProcess {
  logger: winston.Logger;
  tableName: string;

  constructor(private dynamodb: AWS.DynamoDB.DocumentClient) {
    this.logger = LoggerFactory.getLogger();
    this.logger.info('JobProcess.constructor()');
    this.tableName = process.env['JOB_TABLE'] as string;
  }

  public async handler(event: SQSEvent): Promise<JobProcessResponse> {
    this.logger.info('handler()');
    this.logger.info(JSON.stringify(event));

    const response: JobProcessResponse = {
      numberOfRecords: event.Records.length
    };

    try {
      if (event.Records.length > 0) {
        this.logger.info(`Number of SQS Events to process: ${event.Records.length}`);
        
        for (const record of event.Records) {
          await this.processSqsRecord(record);
        }

      } else {
        this.logger.info('No records available in SQS Event');
      }
    } catch (error) {
      this.logger.error('Error occurred in Lambda');
      this.logger.error(error);
    }

    return response;
  }

  private async processSqsRecord(record: SQSRecord) {
    this.logger.info('processSqsRecord()');
    this.logger.info(JSON.stringify(record));

    const jobId: string = record.messageAttributes['JobId'].stringValue as string;
    const jobType: string = record.messageAttributes['JobType'].stringValue as string;
    this.logger.info(`Job Id: ${jobId}`);
    this.logger.info(`Job type: ${jobType}`);

    const item: AWS.DynamoDB.DocumentClient.PutItemInputAttributeMap = {
      JobId: jobId,
      JobType: jobType,
      Status: 'Created',
      CreateDateTime: new Date().toISOString(),
      Payload: record.body
    };

    const response: AWS.DynamoDB.DocumentClient.PutItemOutput = await this.putDynamo(item);
    this.logger.info(JSON.stringify(response));

    await this.executeJobLambda(jobId, jobType);
  }

  private async executeJobLambda(jobId: string, jobType: string) {
    this.logger.info(`executeJobLambda() ${jobId} ${jobType}`);
    switch (jobType) {
      case 'LOOKUP_CUSTOMER':
        await this.executeLookupCustomer(jobId);
        break;
      default:
        this.logger.info('unknown job type');
        await this.updateDynamoSetErrorStatus(jobId, `Unknown job type: ${jobType}`);
    }

  }

  private async executeLookupCustomer(jobId: string) {
    this.logger.info(`executeLookupCustomer() ${jobId}`);

    const arn: string = process.env['JOB_LOOKUP_CUSTOMER'] as string;

    const lambda: AWS.Lambda = new AWS.Lambda();

    const request: any = {
      JobId: jobId
    };

    const params: AWS.Lambda.InvocationRequest = {
      FunctionName: arn,
      Payload: JSON.stringify(request),
      InvocationType: 'Event'
    };

    this.logger.info('Invoke lambda with params:');
    this.logger.info(JSON.stringify(params));
    const response: AWS.Lambda.InvocationResponse = await lambda.invoke(params).promise();
    this.logger.info('Lambda response:');
    this.logger.info(JSON.stringify(response));
  }

  // To do refactor to use DynamoService
  private async updateDynamoSetErrorStatus(jobId: string, errorMessage: string) {
    this.logger.info(`updateDynamoSetErrorStatus() ${jobId} ${errorMessage}`);

    const item: AWS.DynamoDB.DocumentClient.UpdateItemInput = { 
      TableName: this.tableName,
      Key: { 'JobId': jobId },
      UpdateExpression: 'SET #status = :status, #message = :message',
      ExpressionAttributeNames: { '#status': 'Status', '#message': 'StatusMessage'},
      ExpressionAttributeValues: { ':status': 'Error', ':message': errorMessage }
    };
    
    const response: AWS.DynamoDB.DocumentClient.UpdateItemOutput = await this.dynamodb.update(item).promise();
    this.logger.info(JSON.stringify(response));
  }

  private async putDynamo(item: AWS.DynamoDB.DocumentClient.PutItemInputAttributeMap): Promise<AWS.DynamoDB.DocumentClient.PutItemOutput> {
    this.logger.info('putDynamo()');
    this.logger.info(JSON.stringify(item));

    const output: AWS.DynamoDB.DocumentClient.PutItemOutput = await this.dynamodb
      .put({
        TableName: this.tableName,
        Item: item
      })
      .promise();
        
    return output;
  }
}

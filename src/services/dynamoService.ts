import AWS from 'aws-sdk';
import * as winston from 'winston';
import {LoggerFactory} from '../lib/loggerFactory';

export class DynamoService {
  logger: winston.Logger;
  tableName: string;

  constructor(private dynamodb: AWS.DynamoDB.DocumentClient) {
    this.logger = LoggerFactory.getLogger();
    this.logger.info('DynamoService.constructor()');
    this.tableName = process.env['JOB_TABLE'] as string;
    this.logger.info(`Table name: ${this.tableName}`);
  }

  public doSomething(): string {
    this.logger.info('DynamoService.doSomething()');
    return 'done';
  }

  public async getJob(jobId: string): Promise<any> {
    this.logger.info(`DynamoService.getJob() ${jobId}`);

    const data: AWS.DynamoDB.DocumentClient.GetItemOutput = await this.dynamodb
      .get({
        TableName: this.tableName,
        Key: {
          JobId: jobId
        }
      })
      .promise();
    return data.Item;
  }

  public async updateStatus(jobId: string, status: string, statusMessage: string): Promise<AWS.DynamoDB.DocumentClient.UpdateItemOutput> {
    this.logger.info(`DynamoService.updateStatus() ${jobId} ${status} ${statusMessage}`);

    const item: AWS.DynamoDB.DocumentClient.UpdateItemInput = {
      TableName: this.tableName,
      Key: {JobId: jobId},
      UpdateExpression: 'SET #status = :status, #message = :message, #last = :last',
      ExpressionAttributeNames: {'#status': 'Status', '#message': 'StatusMessage', '#last': 'LastUpdateDateTime'},
      ExpressionAttributeValues: {':status': status, ':message': statusMessage, ':last': new Date().toISOString()}
    };

    const response: AWS.DynamoDB.DocumentClient.UpdateItemOutput = await this.dynamodb.update(item).promise();
    this.logger.info(JSON.stringify(response));
    return response;
  }

}

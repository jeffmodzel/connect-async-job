import {Context, SQSEvent} from 'aws-lambda';
import AWS from 'aws-sdk';
import {JobProcess, JobProcessResponse} from './jobProcess';
import {DynamoService} from '../services/dynamoService';

const dynamodb: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient();
const dynamoService: DynamoService = new DynamoService(dynamodb);
const jobProcess: JobProcess = new JobProcess(dynamoService);

async function handler(event: SQSEvent, context: Context): Promise<JobProcessResponse> {
  return await jobProcess.handler(event);
}

export {handler};

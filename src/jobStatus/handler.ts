import {JobStatus, JobStatusResponse} from './jobStatus';
import {ConnectContactFlowEvent, Context} from 'aws-lambda';
import {DynamoService} from '../services/dynamoService';
import AWS from 'aws-sdk';

const dynamodb: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient();
const dynamoService: DynamoService = new DynamoService(dynamodb);
const jobStatus: JobStatus = new JobStatus(dynamoService);

async function handler(event: ConnectContactFlowEvent, context: Context): Promise<JobStatusResponse> {
  return await jobStatus.handler(event);
}

export {handler};
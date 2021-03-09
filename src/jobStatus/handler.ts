import { JobStatus } from './jobStatus';
import { Context, ConnectContactFlowEvent, ConnectContactFlowResult, ConnectContactFlowHandler } from 'aws-lambda';
import { DynamoService } from '../services/dynamoService';
import AWS from 'aws-sdk';

const dynamodb: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient();
const dynamoService: DynamoService = new DynamoService(dynamodb);
const jobStatus: JobStatus = new JobStatus(dynamoService);

export const handler: ConnectContactFlowHandler = async (
  event: ConnectContactFlowEvent,
  context: Context
): Promise<ConnectContactFlowResult> => {
  return (await jobStatus.handler(event) as unknown) as ConnectContactFlowResult;
};

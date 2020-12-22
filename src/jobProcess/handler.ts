import {Context, SQSEvent} from 'aws-lambda';
import AWS from 'aws-sdk';
import {JobProcess, JobProcessResponse} from './jobProcess';

const dynamodb: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient();
const jobProcess: JobProcess = new JobProcess(dynamodb);

async function handler(event: SQSEvent, context: Context): Promise<JobProcessResponse> {
  return await jobProcess.handler(event);
}

export {handler};

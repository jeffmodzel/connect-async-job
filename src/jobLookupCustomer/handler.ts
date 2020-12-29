import {Context} from 'aws-lambda';
import AWS from 'aws-sdk';
import {JobLookupCustomer} from './jobLookupCustomer';
import {AttributeMap} from '../interfaces';

const dynamodb: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient();
const jobLookupCustomer: JobLookupCustomer = new JobLookupCustomer(dynamodb);

async function handler(event: any, context: Context): Promise<AttributeMap> {
  return await jobLookupCustomer.handler(event);
}

export {handler};

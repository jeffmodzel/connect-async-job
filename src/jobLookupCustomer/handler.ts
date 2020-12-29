import {Context} from 'aws-lambda';
import AWS from 'aws-sdk';
import {JobLookupCustomer} from './jobLookupCustomer';
import {AttributeMap} from '../interfaces';
import {DynamoService} from '../services/dynamoService';

const dynamodb: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient();
const dynamoService: DynamoService = new DynamoService(dynamodb);
const jobLookupCustomer: JobLookupCustomer = new JobLookupCustomer(dynamoService);

async function handler(event: any, context: Context): Promise<AttributeMap> {
  return await jobLookupCustomer.handler(event);
}

export {handler};

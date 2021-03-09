import { JobStatus, JobStatusResponse } from './jobStatus';
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

  //
  // Think we have a problem with .Result being an object
  //
  try {
    const tempResponse: JobStatusResponse = await jobStatus.handler(event);
    console.log('returned from await jobStatus.handler(event)');


  } catch (error) {
    console.log('Error occurred in Lambda');
    console.log(error);
  }

  return ( {wasCalled: 'true'} ) as ConnectContactFlowResult;


};

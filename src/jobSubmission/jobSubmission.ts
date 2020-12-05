import {ConnectEvent, AttributeMap} from '../interfaces';
import {Context} from 'aws-lambda';
import AWS from 'aws-sdk';

export class JobSubmission {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handler(event: ConnectEvent, context: Context): Promise<AttributeMap> {

    const sqs: AWS.SQS = new AWS.SQS();
    // add queue name to ENV
    const params: AWS.SQS.GetQueueUrlRequest = { QueueName: 'connect-modzel-job-queue'};
    const response: AWS.SQS.GetQueueUrlResult = await sqs.getQueueUrl(params).promise();
    console.log(response);

    return {
      message: `Hello caller ${event.Details.ContactData.CustomerEndpoint.Address}`
    };
  }
}

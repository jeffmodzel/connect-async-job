import {ConnectEvent, AttributeMap} from '../interfaces';
import {Context} from 'aws-lambda';
import AWS from 'aws-sdk';

export class JobSubmission {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handler(event: ConnectEvent, context: Context): Promise<AttributeMap> {

    const sqs: AWS.SQS = new AWS.SQS();
    const params: any = { QueueName: 'connect-modzel-job-queue'};
    const response: any = await sqs.getQueueUrl(params);
    console.log(response);

    return {
      message: `Hello caller ${event.Details.ContactData.CustomerEndpoint.Address}`
    };
  }
}

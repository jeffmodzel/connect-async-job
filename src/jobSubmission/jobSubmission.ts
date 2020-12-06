import {ConnectEvent, AttributeMap} from '../interfaces';
import {Context} from 'aws-lambda';
import AWS from 'aws-sdk';

export class JobSubmission {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handler(event: ConnectEvent, context: Context): Promise<AttributeMap> {

    const sqs: AWS.SQS = new AWS.SQS();
    // add queue name to ENV

    //const params: AWS.SQS.GetQueueUrlRequest = { QueueName: String(process.env['QUEUE'])};
    //console.log(params);
    //const response: AWS.SQS.GetQueueUrlResult = await sqs.getQueueUrl(params).promise();
    //console.log(response);
    
    // put all this in try catch, return a success bool
    // use MessagesAttributes for "job type"?
    // create JobId or use queue metadata?


    const queueUrl: string = String(process.env['QUEUE_URL']);
    console.log(queueUrl);

    const request: AWS.SQS.SendMessageRequest = {
      QueueUrl: queueUrl,
      MessageBody: 'job data here from lambda'
    };
    const result: AWS.SQS.SendMessageResult = await sqs.sendMessage(request).promise();
    console.log(result);

    return {
      message: `Hello caller ${event.Details.ContactData.CustomerEndpoint.Address}`
    };
  }
}

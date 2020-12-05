import {ConnectEvent, AttributeMap} from '../interfaces';
import {Context} from 'aws-lambda';

export class HelloWorld {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handler(event: ConnectEvent, context: Context): Promise<AttributeMap> {
    return {
      message: `Hello caller ${event.Details.ContactData.CustomerEndpoint.Address}`
    };
  }
}

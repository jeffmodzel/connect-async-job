import {Context, SQSEvent} from 'aws-lambda';
import {AttributeMap} from '../interfaces';

async function handler(event: SQSEvent, context: Context): Promise<AttributeMap> {
  console.log('in handler()');
  console.log(event);

  const response: any = {
    done: true
  };

  return response;
}

export {handler};

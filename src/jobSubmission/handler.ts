import {JobSubmission} from './jobSubmission';
import {Context} from 'aws-lambda';
import {ConnectEvent, AttributeMap} from '../interfaces';

const jobSubmission: JobSubmission = new JobSubmission();

async function handler(event: ConnectEvent, context: Context): Promise<AttributeMap> {
  return await jobSubmission.handler(event, context);
}

export {handler};

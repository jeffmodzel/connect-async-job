import {JobSubmission, JobSubmissionResponse} from './jobSubmission';
import {Context} from 'aws-lambda';
import {ConnectEvent} from '../interfaces';

const jobSubmission: JobSubmission = new JobSubmission();

async function handler(event: ConnectEvent, context: Context): Promise<JobSubmissionResponse> {
  return await jobSubmission.handler(event, context);
}

export {handler};

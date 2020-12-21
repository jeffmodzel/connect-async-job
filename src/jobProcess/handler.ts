import {Context, SQSEvent} from 'aws-lambda';
import {JobProcess, JobProcessResponse} from './jobProcess';

const jobProcess: JobProcess = new JobProcess();

async function handler(event: SQSEvent, context: Context): Promise<JobProcessResponse> {
  return await jobProcess.handler(event);
}

export {handler};

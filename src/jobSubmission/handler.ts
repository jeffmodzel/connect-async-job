import { JobSubmission } from './jobSubmission';
import { Context, ConnectContactFlowEvent, ConnectContactFlowResult, ConnectContactFlowHandler } from 'aws-lambda';

const jobSubmission: JobSubmission = new JobSubmission();

export const handler: ConnectContactFlowHandler = async (
  event: ConnectContactFlowEvent,
  context: Context
): Promise<ConnectContactFlowResult> => {
  return (await jobSubmission.handler(event, context) as unknown) as ConnectContactFlowResult;
};
import AWS from 'aws-sdk';
import * as winston from 'winston';
import {LoggerFactory} from '../lib/loggerFactory';
import {SQSEvent, SQSRecord} from 'aws-lambda';

export interface JobProcessResponse {
  numberOfRecords: number;
}

export class JobProcess {
  logger: winston.Logger;

  constructor() {
    this.logger = LoggerFactory.getLogger();
    this.logger.info('JobProcess.constructor()');
  }

  public async handler(event: SQSEvent): Promise<JobProcessResponse> {
    this.logger.info('handler()');
    this.logger.info(JSON.stringify(event));

    const response: JobProcessResponse = {
      numberOfRecords: event.Records.length
    };

    try {
      if (event.Records.length > 0) {
        this.logger.info(`Number of SQS Events to process: ${event.Records.length}`);
        event.Records.forEach((x) => {
          this.processSqsRecord(x);
        });
      } else {
        this.logger.info('No records available in SQS Event');
      }
    } catch (error) {
      this.logger.error('Error occurred in Lambda');
      this.logger.error(error);
    }

    return response;
  }

  private processSqsRecord(record: SQSRecord) {
    this.logger.info('processSqsRecord()');
    this.logger.info(JSON.stringify(record));

    //
    // grab messageAttributes (JobType, JobId)
    // JSON parse body
    //
  }
}

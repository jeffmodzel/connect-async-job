import {handler} from './handler';
import {AttributeMap, ConnectEvent} from '../interfaces';
import * as TypeMoq from 'typemoq';
import {Context} from 'aws-lambda';

describe('HelloWorld', () => {
  describe('handler', () => {
    it('Should say hello ANI', done => {
      const event: ConnectEvent = {
        Details: {
          ContactData: {
            Attributes: {},
            Channel: 'VOICE',
            ContactId: '4a573372-1f28-4e26-b97b-XXXXXXXXXXX',
            CustomerEndpoint: {
              Address: '+1234567890',
              Type: 'TELEPHONE_NUMBER'
            },
            InitialContactId: '4a573372-1f28-4e26-b97b-XXXXXXXXXXX',
            InitiationMethod: 'INBOUND',
            InstanceARN: 'arn:aws:connect:aws-region:1234567890:instance/c8c0e68d-2200-4265-82c0-XXXXXXXXXX',
            PreviousContactId: '4a573372-1f28-4e26-b97b-XXXXXXXXXXX',
            Queue: 'QueueName',
            SystemEndpoint: {
              Address: '+1234567890',
              Type: 'TELEPHONE_NUMBER'
            },
            MediaStreams: {}
          },
          Parameters: {
            sentAttributeKey: 'sentAttributeValue'
          }
        },
        Name: 'ContactFlowEvent'
      };

      const ctxMock: TypeMoq.IMock<Context> = TypeMoq.Mock.ofType<Context>();

      handler(event, ctxMock.object).then((data: AttributeMap) => {
        expect(data.message).toBe('Hello caller +1234567890');
        done();
      });
    });
  });
});

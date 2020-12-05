import {HelloWorld} from './helloWorld';
import {Context} from 'aws-lambda';
import {ConnectEvent, AttributeMap} from '../interfaces';

// new the HelloWorld instance and use any constructor dependency injection
// here in module scope to take advantage of Lambda freeze/thaw persistence of
// helloWorld instance between subsequent invocations of
// the lambda hander using the same container. New will not be called again
// until a container is used.
const helloWorld: HelloWorld = new HelloWorld();

async function handler(event: ConnectEvent, context: Context): Promise<AttributeMap> {
  return await helloWorld.handler(event, context);
}

export {handler};

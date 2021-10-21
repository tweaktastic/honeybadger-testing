import { APIGatewayProxyHandler } from 'aws-lambda';
import Honeybadger from '@honeybadger-io/js';

Honeybadger.configure({
  reportData: false,
  environment: 'dev',
  apiKey: 'dummy-key'
});

const handler: APIGatewayProxyHandler = async (event: any, context: any) => {
  try {
    throw new Error('this is an error');
  } catch(err) {
    throw err;
  }
}

export default Honeybadger.lambdaHandler(handler);

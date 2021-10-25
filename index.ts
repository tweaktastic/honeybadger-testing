import { APIGatewayProxyHandler } from 'aws-lambda';
import Honeybadger from '@honeybadger-io/js';

Honeybadger.configure({
  reportData: true,
  environment: 'dev',
  apiKey: 'dummy-key'
});


const handler: APIGatewayProxyHandler = async (event: any, context: any) => {
  try {
    if(event.fail) {
      throw new Error('this is an error');
    }
    return {
      statusCode: 1,
      body: 'something'
    };
  } catch(err) {
    throw err;
  }
}

export default Honeybadger.lambdaHandler(handler);

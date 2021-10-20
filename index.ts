import { APIGatewayProxyHandler } from 'aws-lambda';
import Honeybadger from '@honeybadger-io/js';


const handler: APIGatewayProxyHandler = async (event: any, context: any) => {
  try {
    throw new Error('this is an error');
  } catch(err) {
    throw err;
  }
}

export default Honeybadger.lambdaHandler(handler);

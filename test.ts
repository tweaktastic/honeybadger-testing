import { promisify } from 'util';
import handler from './index';

const wrappedHandler = promisify(handler);

describe('Handler test', () => {
  test('throws an error', async () => {
    try {
      await wrappedHandler({
        fail: 1
      }, {});
      throw new Error('Should fail')
    } catch(err) {
      console.log(err);
    }
  });

  test('throws no error', async () => {
    try {
      const a: any = await wrappedHandler({
        fail: 0
      }, {});
      expect(a.statusCode).toBe(1);
      expect(a.body).toBe('something');
    } catch(err) {
      throw err;
    }
  });
});

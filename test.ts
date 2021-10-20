import handler from './index';


describe('Handler test', () => {
  test('throws an error', (done) => {
    handler({}, {}, (err?: Error, resp?: any) => {
      if(err) {
        console.log('gets here');
        done();
      }
      done(new Error('Test should fail'));
    });
  });
});

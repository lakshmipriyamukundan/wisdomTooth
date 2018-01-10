import * as supertest from 'supertest' ;
import * as app from '../src/server';

jest.mock('../src/models/User');

describe('Testing basic functionalities of user', () => {
    // afterEach(() => {
    //     app.close()
    // })
    test('should respond with a 200 with no query parameters', () => {
    return supertest(app)
      .get('/api/v1/users/listAll')
      .expect(200)
      .then(response => {
       console.log(response);
      });
  });
});

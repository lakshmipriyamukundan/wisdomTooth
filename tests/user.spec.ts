import * as supertest from 'supertest';
import app from '../src/server';

// jest.mock('../src/models/User');

describe('Testing basic functionalities of user', () => {
    it('should respond with a 200 with no query parameters', async () => {
      const response = await supertest(app).get('/api/v1/users/listAll');
      expect(response.body.status).toBe('Success');
    });

    it('testing user save functionality', async () => {
      const response = await supertest(app)
      .post('/api/v1/users/save')
      .send({
        firstName: 'tony',
        lastName: 'Stark',
        email: 'iamtony123@stark.com',
        password: 'iamtony'
      });
      // console.log(response.body);
      expect(response.body.status).toBe('Failed');
    });
});

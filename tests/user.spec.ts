import * as supertest from 'supertest';
import app from '../src/server';
import User from '../src/models/User';
import * as lme from 'lme';

const keyMail = 'iamironman@gm.com';

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
        email: keyMail,
        password: 'iamtony'
      })
      .expect(200);
      expect(response.body.status).toBe('Success');
    });

    it('Testing user login functionality', async () => {
      const res = await supertest(app).post('/api/v1/users/login').send({
        email: keyMail,
        password: 'iamtony'
      })
      .expect(200);
      expect(res.body).toHaveProperty('status', 'Success');
      expect(res.body).toHaveProperty('data');
    });

     it('Testing user login functionality', async () => {
      const res = await supertest(app).post('/api/v1/users/login').send({
        email: 'keyMail@hh.com',
        password: 'iamtony'
      })
      .expect(422);
      expect(res.body).toHaveProperty('status', 'Failed');
    });

    it('Deletes the created user', async () => {
      try {
        const remove = await User.remove({email: keyMail});
      } catch (err) {
        lme.e(err);
      }
    });
});

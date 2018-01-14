import * as supertest from 'supertest';
import app from '../src/server';
import User from '../src/models/User';

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
      //console.log(response.body);
      expect(response.body.status).toBe('Success');
    });

    it('Deletes the created user', async () => {
      try{
        const remove = await User.remove({email: keyMail});
        //console.log(remove)
      }catch(err){
        console.log(err)
      }
    })
    
});

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app/controllers/user.controller.js');
const conn = require('../../app/config/db.config.js');


it('OK, creating a new user works', (done) => {
  request(app).post('/api')
  .send({ userName: 'Doe', userLastName: 'John', email: 'john.doe@gmail.com', age: 42})
  .then((res) => {
    const body = res.body;
    expect(body).to.contain.property('_id');
    expect(body).to.contain.property('userName');
    expect(body).to.contain.property('userLastName');
    expect(body).to.contain.property('email');
    expect(body).to.contain.property('age');
    done();
  })
})
// describe('POST /api', () => {
//   before((done) => {
//     conn.connect()
//     .then(() => done())
//     .catch((err) => done(err));
//   })

//   before((done) => {
//     conn.close()
//     .then(() => done())
//     .catch((err) => done(err));
//   })
// })
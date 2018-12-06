/*global describe, it, expect, api, beforeEach */

const User = require('../../../models/user');

let user;

const userIds = [
  '5be9860fcb16d525543ceda1'
];

const userData = {
  _id: userIds[0],
  username: 'janedoe',
  email: 'jane@app.com',
  password: 'pass',
  profilePicture: '',
  forename: 'Jane',
  surname: 'Doe',
  age: 30,
  sex: 'Female',
  height: 161.6,
  weight: 70.2
};

describe('user AUTH', () => {

  beforeEach(done => {
    User
      .remove({})
      .then(() => User.create(userData))
      .then(_user => {
        user = _user;
        done();
      });
  });

  it('should return an object when registering', done => {
    api.post('/api/register')
      .send(userData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return the correct message when logging in', done => {
    api.post('/api/login')
      .send(userData)
      .end((err, res) => {
        expect(res.body.message).to.eq(`Welcome back ${userData.forename}`);
        done();
      });
  });

  it('should return a valid token when logging in', done => {
    api.post('/api/login')
      .send(userData)
      .end((err, res) => {
        expect(res.body).to.have.property('token');
        expect(res.body.token).to.be.a('string');
        expect(res.body.token).to.match(/\./);
        done();
      });
  });

  it('should return a 401 response if password in invalid when logging in', done => {
    api.post('/api/login')
      .send({
        email: 'wrong@wrong.com',
        password: 'bananarz'
      })
      .end((err, res) => {
        expect(res.body.password).to.not.eq(userData.password);
        expect(res.status).to.eq(401);
        done();
      });
  });

});

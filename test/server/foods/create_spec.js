/*global describe, it, expect, api, beforeEach */

const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

const { secret } = require('../../../config/environment');

const Food = require('../../../models/food');

const foodData = {
  name: 'Chocolate Almonds',
  kCalsPer100g: 594,
  proteinPer100g: 18,
  carbsPer100g: 28,
  fatPer100g: 48
};

let token;

describe('Food CREATE', () => {

  beforeEach(done => {
    Food.remove({})
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test',
        profilePicture: 'test',
        forename: 'test',
        surname: 'test',
        age: 100,
        sex: 'Male',
        height: 100,
        weight: 100
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });


  it('should return a 200 response', done => {
    api.post('/api/foods')
      .set('Authorization', `Bearer ${token}`)
      .send(foodData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/foods')
      .set('Authorization', `Bearer ${token}`)
      .send(foodData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/foods')
      .set('Authorization', `Bearer ${token}`)
      .send(foodData)
      .end((err, res) => {
        expect(res.body.name).to.eq(foodData.name);
        expect(res.body.kCalsPer100g).to.eq(foodData.kCalsPer100g);
        expect(res.body.proteinPer100g).to.eq(foodData.proteinPer100g);
        expect(res.body.carbsPer100g).to.eq(foodData.carbsPer100g);
        expect(res.body.fatPer100g).to.eq(foodData.fatPer100g);
        done();
      });
  });
});

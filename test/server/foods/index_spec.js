/* global describe, it, expect, api, beforeEach */
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/environment');

const Food = require('../../../models/food');

let token;

const foodIds = [
  '5c0910e9b7c0eb472d098b3e'
];

const foodData = {
  _id: foodIds[0],
  name: 'Chocolate Almonds',
  kCalsPer100g: 594,
  proteinPer100g: 18,
  carbsPer100g: 28,
  fatPer100g: 48
};


describe('Food INDEX', () => {

  beforeEach(done => {
    Food.remove({})
      .then(() => Food.create(foodData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '5 weeks' });
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get('/api/foods')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/foods')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/foods')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.body.forEach(item => expect(item).to.be.an('object'));
        done();
      });
  });

});

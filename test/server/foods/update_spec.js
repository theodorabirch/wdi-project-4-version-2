/*global describe, it, expect, api, beforeEach */

const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

const { secret } = require('../../../config/environment');

const Food = require('../../../models/food');

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

console.log('foodData after the const is:', foodData);

let token;
let foodId;

describe('Food UPDATE', () => {

  beforeEach(done => {
    Food.remove({})
      .then(() => Food.create({
        name: 'test',
        kCalsPer100g: 100,
        proteinPer100g: 100,
        carbsPer100g: 100,
        fatPer100g: 100
      }))
      .then(food => {
        foodId = food._id;
      })
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
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '5 weeks' });
        done();
      });
  });


  console.log('foodData after the beforeEach is:', foodData);

  it('should return a 401 response without a token', done => {
    api.put('/api/foods')
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 200 response', done => {
    api.put('/api/foods')
      .set('Authorization', `Bearer ${token}`)
      .send(foodData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.put('/api/foods')
      .set('Authorization', `Bearer ${token}`)
      .send(foodData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  console.log('foodData before we check for correct data is:', foodData);

  it('should return the correct data', done => {
    api.put('/api/foods')
      .set('Authorization', `Bearer ${token}`)
      .send(foodData)
      .end((err, res) => {
        expect(res.body.name).to.not.eq(foodData.name);
        expect(res.body.kCalsPer100g).to.eq(foodData.kCalsPer100g);
        expect(res.body.proteinPer100g).to.eq(foodData.proteinPer100g);
        expect(res.body.carbsPer100g).to.eq(foodData.carbsPer100g);
        expect(res.body.fatPer100g).to.eq(foodData.fatPer100g);
        done();
      });
  });
});

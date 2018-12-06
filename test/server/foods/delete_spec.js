/* global describe, it, expect, api, beforeEach */

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


let token;
let foodId;


describe('Food DELETE', () => {

  beforeEach(done => {
    Food.remove({})
      .then(() => Food.create(foodData))
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
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });


  it('should return 404 response on food show page, when food is deleted', done => {
    api.delete(`/api/foods/${foodId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(foodData)
      .end((err, res) => {
        expect(res.status).to.eq(404);
        done();
      });
  });
});

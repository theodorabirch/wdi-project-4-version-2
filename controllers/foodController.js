const Food = require('../models/food');

function foodCreateRoute(req, res, next) {
  Food.create(req.body)
    .then(food => res.status(201).json(food))
    .catch(next);
}

function foodIndexRoute(req,res, next){
  Food.find()
    .then(foods => res.json(foods))
    .catch(next);
}

function foodUpdateRoute(req,res,next) {
  Food.findById(req.params.id)
    .then(food => food.set(req.body))
    .then(food => food.save())
    .then(food => res.json(food))
    .catch(next);
}

function foodDeleteRoute(req, res, next) {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  create: foodCreateRoute,
  index: foodIndexRoute,
  update: foodUpdateRoute,
  delete: foodDeleteRoute
};

const Meal = require('../models/meal');


function mealShowRoute(req, res, next) {
  Meal.findById(req.params.id)
    .then(meal => res.json(meal))
    .catch(next);
}

function mealCreateRoute(req, res, next) {
  Meal.create(req.body)
    .then(meal => res.status(201).json(meal))
    .catch(next);
}

function mealUpdateRoute(req, res, next) {
  Meal.findById(req.params.id)
    .then(meal => meal.set(req.body))
    .then(meal => meal.save())
    .then(meal => res.json(meal))
    .catch(next);
}

function mealDeleteRoute(req, res, next) {
  Meal.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports ={
  show: mealShowRoute,
  update: mealUpdateRoute,
  delete: mealDeleteRoute,
  create: mealCreateRoute
}; 

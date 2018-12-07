const Meal = require('../models/meal');

function createRoute(req, res, next) {
  Meal.findById(req.params.mealId)
    .then(meal => {
      req.body.user = req.tokenUserId;
      meal.servings.push(req.body);
      return meal.save();
    })
    .then(meal => Meal.populate(meal))
    .then(meal => res.json(meal))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Meal.findById(req.params.mealId)
    .then(meal => {
      const serving = meal.servings.id(req.params.servingId);
      serving.remove();
      return meal.save();
    })
    .then(meal => Meal.populate(meal))
    .then(meal => res.json(meal))
    .catch(next);
}

function updateRoute(req, res, next){
  Meal.findById(req.params.mealId)
    .then(meal => {
      const serving = meal.servings.id(req.params.servingId);
      serving.set(req.body);
      return meal.save();
    })
    .then(meal => Meal.populate(meal))
    .then(meal => res.json(meal))
    .catch(next);
}

module.exports = {
  create: createRoute,
  delete: deleteRoute,
  update: updateRoute
};

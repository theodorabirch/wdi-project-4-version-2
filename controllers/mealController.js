const Meal = require('../models/meal');

function mealIndexRoute(req,res, next){
  Meal.find()
    .then(meals => res.json(meals))
    .catch(next);
}

function mealShowRoute(req, res, next) {
  Meal.findById(req.params.id)
    .populate('servings.food user')
    .then(meal => {
      res.json(meal);
    })
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

function dayShowRoute(req, res, next) {
  const { year, month, day } = req.params;
  const requestedDay = new Date(year, month - 1, day);
  const nextDay = new Date(requestedDay.getTime() + 24 * 60 * 60 * 1000);
  console.log('Finding meal', year, month, day, requestedDay, nextDay);
  Meal.find({
    user: req.tokenUserId,
    date: {
      $gte: requestedDay, $lt: nextDay
    }
  })
    .populate('servings.food user')
    .then(meal => res.json(meal))
    .catch(next);
}

module.exports ={
  show: mealShowRoute,
  update: mealUpdateRoute,
  delete: mealDeleteRoute,
  create: mealCreateRoute,
  index: mealIndexRoute,
  dayShow: dayShowRoute
};

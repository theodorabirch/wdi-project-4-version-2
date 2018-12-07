const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

function workoutIndexRoute(req,res, next){
  Workout.find()
    .then(workout => res.json(workout))
    .catch(next);
}

function workoutShowRoute(req, res, next) {
  Workout.findById(req.params.id)
    .populate('user exercise exercise.intensity exercise.type', Exercise)
    .then(workout => {
      res.json(workout);
    })
    .catch(next);
}

function workoutCreateRoute(req, res, next) {
  Workout.create(req.body)
    .then(workout => res.status(201).json(workout))
    .catch(next);
}

function workoutUpdateRoute(req,res,next) {
  Workout.findById(req.params.id)
    .then(workout => workout.set(req.body))
    .then(workout => workout.save())
    .then(workout => res.json(workout))
    .catch(next);
}

function workoutDeleteRoute(req, res, next) {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

function dayShowRoute(req, res, next) {
  const { year, month, day } = req.params;
  const requestedDay = new Date(year, month - 1, day);
  const nextDay = new Date(requestedDay.getTime() + 24 * 60 * 60 * 1000);
  console.log('Find the workout', year, month, day, requestedDay, nextDay);
  Workout.find({
    user: req.tokenUserId,
    date: {
      $gte: requestedDay, $lt: nextDay
    }
  })
    .populate('user user.weight exercise.intensity exercise.type')
    .then(workout => res.json(workout))
    .catch(next);
}

module.exports ={
  create: workoutCreateRoute,
  delete: workoutDeleteRoute,
  update: workoutUpdateRoute,
  index: workoutIndexRoute,
  dayShow: dayShowRoute,
  show: workoutShowRoute
};

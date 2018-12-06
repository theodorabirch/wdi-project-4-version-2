const Workout = require('../models/workout');


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

function workoutIndexRoute(req,res, next){
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(next);
}

module.exports ={
  create: workoutCreateRoute,
  delete: workoutDeleteRoute,
  update: workoutUpdateRoute,
  index: workoutIndexRoute
};

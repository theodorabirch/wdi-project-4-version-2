const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'user'},
  date: Date,
  exercise: {type: mongoose.Schema.ObjectId, ref: 'exercise'},
  duration: { type: Number, min: 5, max: 600 }
});

module.exports = mongoose.model('Workout', workoutSchema);

//Virtuals to be added

//total calories expended today.
//find every workout object on a specific date
//sum their caloric expenditure using our formula (workout.kCalPer100g*quantity)
//logWorkout(mins, user.weight, exercise.intensity) { 
//const calsBurned = ( (exercise.intensity * user.weight) / 60) * mins 
//return calsBurned}


workoutSchema.virtual('WorkoutExpenditure')
  .get(function() {

    const currentUser = user._id;
    const mins = this.mins;
    const weight = this.user.weight;
    const intensity = this.intensity;

    function workoutCalories(mins, weight, intensity) { 
      const calsBurned = ( (intensity * weight) / 60) * mins ;
      return calsBurned;
    }

    if (currentUser) {
      workoutCalories();
    }
  })

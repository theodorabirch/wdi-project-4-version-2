const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  date: Date,
  exercise: {type: mongoose.Schema.ObjectId, ref: 'Exercise'},
  duration: { type: Number, min: 5, max: 600 }
});

workoutSchema.virtual('totalCaloriesBurned')
  .get(function() {

    const mins = this.duration;
    const weight = this.user.weight;
    const intensity = this.exercise.intensity;

    function workoutCalories(mins, weight, intensity) {
      const calsBurned = ((intensity * weight) / 60) * mins;
      console.log('jane burned:', calsBurned);
      return calsBurned;
    }
    return workoutCalories(mins, weight, intensity);
  });

workoutSchema.pre('find', function() {
  this.populate('exercise user totalCaloriesBurned');
});

workoutSchema.virtual('totalCaloriesBurned', {
  localField: '_id',
  foreignField: 'user',
  ref: 'Workout'
});

workoutSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Workout', workoutSchema);

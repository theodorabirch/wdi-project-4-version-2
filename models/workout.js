const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  date: Date,
  exercise: {type: mongoose.Schema.ObjectId, ref: 'Exercise'},
  duration: { type: Number, min: 5, max: 600 }
});

workoutSchema.virtual('totalCaloriesBurned')
  .get(function() {
    const mins = this.mins;
    const weight = this.user.weight;
    const intensity = this.user.intensity;

    function workoutCalories(mins, weight, intensity){
      const calsBurned = ((intensity * weight) / 60) * mins;
      return calsBurned;
    }
    workoutCalories();
  });

workoutSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Workout', workoutSchema);

const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'user'},
  date: Date,
  exercise: {type: mongoose.Schema.ObjectId, ref: 'exercise'},
  duration: { type: Number, min: 5, max: 600 }
});

module.exports = mongoose.model('Workout', workoutSchema);

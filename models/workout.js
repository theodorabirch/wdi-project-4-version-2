const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'user'},
  date: Date,
  exercise: {type: mongoose.Schema.ObjectId, ref: 'exercise'},
  duration: Number
});

module.exports = mongoose.model('workout', workoutSchema);

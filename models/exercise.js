const mongoose = require('mongoose');


const exerciseSchema = mongoose.Schema({
  type: String, enum: ['Jogging', 'Cycling', 'Swimming (Freestyle)'],
  intensity: { type: Number, min: 1, max: 23 },
  icon: String
});

module.exports = mongoose.model('Exercise', exerciseSchema);

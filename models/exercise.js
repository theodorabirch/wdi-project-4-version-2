const mongoose = require('mongoose');


const exerciseSchema = mongoose.Schema({
  type: String, enum: ['Running', 'Cycling', 'Swimming'],
  intensity: { type: Number, min: 1, max: 23 }
});

module.exports = mongoose.model('exercise', exerciseSchema);

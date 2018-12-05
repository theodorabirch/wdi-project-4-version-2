const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: String,
  kCalsPer100g: Number,
  proteinPer100g: Number,
  carbsPer100g: Number,
  fatPer100g: Number
});

module.exports = mongoose.model('food', foodSchema);

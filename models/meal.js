const mongoose = require('mongoose');

const mealSchema = mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'user'},
  date: Date,
  serving: {
    food: {type: mongoose.Schema.ObjectId, ref: 'food', required: true},
    quantity: Number
  },
  name: [{
    type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']
  }]
});
module.exports = mongoose.model('Meal', mealSchema);

//Virtuals to be added




//Meals
//Each meal functions as a show page.
//Servings that comprise a meal (breakfast, lunch etc.) funciton as a comment on the show page.
//user clicks on breakfast and is directed to Breakfast SHOW.
//Comments/Servings are posted on the “Breakfast” show by the user.
//Each comment/serving is an object with 2 key/value pairs: food & quantity

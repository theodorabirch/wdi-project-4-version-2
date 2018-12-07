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

//find total amount of calories, per user, ever.

//we can route to a specific users meals (ie, user/:id/meals)
//we can route to a specific users day (ie, user/:id/meals/:year/:month/:day)

//post to /user/:id/meals/2018/12/6

//back end needs to find the meals that has the User "theo" on the correct date.
mealSchema.virtual('totalCalories')
  .get(function() {
    return this.servings.reduce((total, serving) =>
      total + (serving.food.kCalsPer100g * serving.quantity), 0);
  });


mealSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Meal', mealSchema);

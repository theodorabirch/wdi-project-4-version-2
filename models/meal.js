const mongoose = require('mongoose');

const mealSchema = mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  name: {
    type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']
  },
  date: Date,
  servings: [{
    food: {type: mongoose.Schema.ObjectId, ref: 'Food', required: true},
    quantity: Number
  }]
});

//find total amount of calories, per user, ever.

//we can route to a specific users meals (ie, user/:id/meals)
//we can route to a specific users day (ie, user/:id/meals/:year/:month/:day)

//post to /user/:id/meals/2018/12/6

//back end needs to find the meals that has the User "theo" on the correct date.
mealSchema.virtual('totalCalories')
  .get(function() {
    console.log('this is', this);
    return this.servings.reduce((total, serving) =>
      total + (serving.food.kCalsPer100g * serving.quantity), 0);
  });



//for each object in the breakfast array:
//serving.quantity * serving.food.kCalsPer100g

//using the reduce method, sum all of the numerical values in each array.


// virtual for calories consumed per meal
//stage 1, get total intake for every meal you've ever had. we can filter by date either on the front end or later on the user virtua.
// is finding the total caloric intake of each mea on 1 today

//stage 2 is summing those numbers and feeing it to te User Dashboard for a total daily intake.


//if it all goes to shit, look at doing it on a controller.
//ie, make a meal, when thats cretaed we then in the user and add that data into their
// caloriesConsiumed virtual


mealSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Meal', mealSchema);

//Virtuals to be added
//total calories consumed today.
//find every food object in the breakfast, lunch, dinner sna snack array
//sum their caloric intake (food.kCalPer100g*quantity)

//Meals
//Each meal functions as a show page.
//Servings that comprise a meal (breakfast, lunch etc.) funciton as a comment on the show page.
//user clicks on breakfast and is directed to Breakfast SHOW.
//Comments/Servings are posted on the “Breakfast” show by the user.
//Each comment/serving is an object with 2 key/value pairs: food & quantity

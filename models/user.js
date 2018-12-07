const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: String,
  forename: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  sex: {
    type: String, enum: ['Male', 'Female'], required: true
  },
  height: { type: Number, required: true },
  weight: { type: Number, required: true }
});

userSchema.pre('save', function() {
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, 8);
  }
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  return bcrypt.compareSync(attemptedPassword, this.password);
};

//Virtuals to be added

// caloriesBurned virtual
userSchema.virtual('caloriesBurnedPerDay')
  .get(function() {
    //for each workout where workout.date === workout.date,
    //run workoutExpenditure fucntion.
  });

userSchema.virtual('caloriesConsumedPerMeal')
  .get(function() {
    //for each meal where meal.dat === meal.date:
    //run caloricIntakeByMeal function
  });

userSchema.virtual('caloriesConsumedPerDay')
  .get(function() {
    //for the current user
    //check whether their ID matches the userIds attached to any of the serving in our datanase
    //collect these in an array on a const
    //filter this array into separate arrays depending on their date.
  });

// include virtuals in res.json
userSchema.set('toJSON', {
  virtuals: true
});



module.exports = mongoose.model('User', userSchema);

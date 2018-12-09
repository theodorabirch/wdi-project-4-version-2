const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  profilePicture: String,
  forename: { type: String },
  surname: { type: String },
  age: { type: Number },
  sex: {
    type: String, enum: ['Male', 'Female']
  },
  height: { type: Number },
  weight: { type: Number }
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

userSchema.virtual('BMI')
  .get(function() {
    return this.weight / (Math.pow(this.height/100),2 );
  });

// caloriesBurned virtual
userSchema.virtual('dailyCaloriesOut')
  .get(function() {
    //for each workout where workout.date === workout.date,
    //run workoutExpenditure fucntion.
  });

userSchema.virtual('caloriesConsumedPerMeal')
  .get(function() {
    //for each meal where meal.dat === meal.date:
    //run caloricIntakeByMeal function
  });

userSchema.virtual('dailyCaloriesIn')
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

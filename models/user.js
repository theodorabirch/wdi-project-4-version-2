const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profilePicture: String,
  forename: String,
  surname: String,
  age: Number,
  dob: Date,
  sex: [{
    type: String, enum: ['Male', 'Female']
  }],
  height: Number,
  weight: Number
});

userSchema.pre('save', function() {
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, 8);
  }
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  return bcrypt.compareSync(attemptedPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

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
    type: String, enum: ['male', 'female']
  }],
  height: Number,
  weight: Number
});

module.exports = mongoose.model('user', userSchema);

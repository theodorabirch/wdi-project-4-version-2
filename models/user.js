const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: String,
  forename: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  sex: [{
    type: String, enum: ['Male', 'Female'], required: true
  }],
  height: { type: Number, required: true },
  weight: { type: Number, required: true }
});

module.exports = mongoose.model('User', userSchema);

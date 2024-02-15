const mongoose = require('mongoose')
const {Schema, model} = require('../config/db-connection')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }
});

// save middleware
userSchema.post('save', function (doc, next) {
  console.log('User saved:', doc);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
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
})

// You can add pre hooks to your schema right here

const User = mongoose.model('User', userSchema);

module.exports = User;
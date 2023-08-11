// const { error } = require('jquery');
const mongoose = require('mongoose');
var validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true,
      minlength: 3
    },   
    email: {
      type: String,
      require: true,
      validate(value){
        if(!validator.isEmail(value)){
          throw new Error("Invalid email Id")
        }
      }
    },   
    phone: {
      type: Number,
      require: true,
      min: 10
    },   
    message: {
      type: String,
      require: true,
      min: 3
    },

    date: {
      type: Date,
      default: Date.now
    }

  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;
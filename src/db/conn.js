const mongoose = require('mongoose');
require("dotenv").config();
console.log(process.env.key_password);
const db = process.env.key_password;
mongoose.connect(db)
  .then(() =>{
    console.log('Connected!');
  })
  .catch((error) => {
    console.log(error);
  });

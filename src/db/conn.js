const mongoose = require('mongoose');
require("dotenv").config();
const db = process.env.key_password;
mongoose.connect(db)
  .then(() =>{
    console.log('Connected!');
  })
  .catch((error) => {
    console.log(error);
  });

const mongoose = require('mongoose');
const db = "mongodb://127.0.0.1:27017/himDynamic"
mongoose.connect(db)
  .then(() =>{
    console.log('Connected!');
  })
  .catch((error) => {
    console.log(error);
  });

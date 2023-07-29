const mongoose = require('mongoose');
// require("dotenv");
// const password = process.env.password;
const db = `mongodb+srv://himanshuanand412:Heeman12345@cluster0.q1xmja0.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(db)
  .then(() =>{
    console.log('Connected!');
  })
  .catch((error) => {
    console.log(error);
  });

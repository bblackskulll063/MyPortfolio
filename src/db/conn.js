const mongoose = require('mongoose');
const db = "mongodb+srv://himanshuanand412:Heeman12345@cluster0.q1xmja0.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db)
  .then(() =>{
    console.log('Connected!');
  })
  .catch((error) => {
    console.log(error);
  });

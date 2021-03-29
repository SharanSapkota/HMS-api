const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require('cors')
 require("dotenv/config");
const Foods = require('./routes/foods')


const app = express();

app.use(bodyParser.json());

app.use(cors())

app.get("/", async(req, res) => {
    res.send("I am in the home route")
})

app.use('/api/foods', Foods)

mongoose.connect(
  process.env.MONGO_URI,
//  'mongodb+srv://sharan123:sharan123@cluster0.rdbbh.mongodb.net/HMS?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    
   },
    () => {
      console.log("DB connected");
    }
)

//mongodb+srv://sharan123:sharan123@cluster0.rdbbh.mongodb.net/HMS?retryWrites=true&w=majority

app.listen(5001, function() {
    console.log("server started on 5001")
})
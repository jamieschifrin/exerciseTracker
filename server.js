const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// allows us to have environment variables in the .env file
require('dotenv').config()

// start middleware
// create an express app
const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));

// end middleware

const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection; 
connection.once('open',() => {
    console.log("mongoDB database connection established successfully")
})

// start routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);





// end routes
app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})









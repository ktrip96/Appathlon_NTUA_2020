const express = require("express")
const { mongo } = require("mongoose")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()


// Middlewares


// import Routes
const postsRoute = require('./routes/posts')

app.use('/posts',postsRoute)

// Routes
app.get('/',(req,res)=>{
    res.send("We are at home page")
})

// Connect to DB
mongoose.set("useNewUrlParser", true)
mongoose.set("useFindAndModify", false)
mongoose.set("useCreateIndex", true)

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to Database")
})

// Start listening to the server
app.listen(3000)

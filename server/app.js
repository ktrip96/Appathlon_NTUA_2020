const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
require('dotenv').config()


// Middlewares
app.use(cors())

// the following lines need in order to automatically 
// convert req, res to json format.
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// import Routes
const postsRoute = require('./routes/posts')

app.use('/posts',postsRoute)

// Routes
app.get('/',(req,res)=>{
    res.send("We are at home page")
})

// Connect to DB

// setting some parametres to ignore some mongoose errors
mongoose.set("useNewUrlParser", true)
mongoose.set("useFindAndModify", false)
mongoose.set("useCreateIndex", true)

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to Database")
})

// Start listening to the server
app.listen(4000)

const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
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
const usersRoute = require('./routes/users')
const crimesRoute = require('./routes/crimes')

app.use('/crimes',crimesRoute)
app.use('/users',usersRoute)

// Routes
app.get('/',(req,res)=>{
    res.send("We are at home page")
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open',()=>{
  console.log('MongoDB database established successfully')
})

// Start listening to the server
app.listen(port,()=>{
  console.log(`Server is running on port: ${port}`)
})

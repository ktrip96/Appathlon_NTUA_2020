const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const auth = require('../middleware/auth')
const { findByIdAndDelete } = require("../models/User")

// Get all Users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error " + err))
})

// Register A New User
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body
    let { username } = req.body

    // validate
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Not all fields have been entered" })

    if (password.length < 5)
      return res
        .status(400)
        .json({ message: "Password needs to be at least 5 characters long" })

    const existingUser = await User.findOne({ email: email })
    if (existingUser)
      return res
        .status(400)
        .json({ message: "Account with this email already exists" })

    if (!username) username = email

    existingUser = await User.findOne({ username: username })
    if (existingUser)
      return res
        .status(400)
        .json({ message: "Account with this username already exists" })


    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      email,
      password: passwordHash,
      username,
    })
    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Login User

router.post('/login', async(req,res) => {
  try{
   const {username,password} = req.body

  // validate
  if(!username || !password) res.status(400).json({message:"Not all fields have been entered"})

  const user = await User.findOne({username:username})
  if(!user) 
    return res.status(400).json({message:`The user ${username} does not exist`})
  
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch)
    return res.status(400).json({message:"Wrong password"})
    
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
    res.json({
      token:token,
      user:{
        id:user._id,
        email:user.email,
        username:user.username
      }
    })
  
  } catch(err){
    res.status(500).json({error: err.message})
  }
})

// Private delete user with auth middleware

router.route('/delete', auth, async (req,res)=>{
  try{
    const deletedUser = await findByIdAndDelete(req.user)
    res.json(deletedUser)
  } catch(err){
    res.status(500).json({error: err.message})
  }
})

// Check if a token is Valid

router.post('/tokenIsValid', async (req,res)=>{
  try{
    const token = req.header("x-auth-token")
    if(!token) return res.json(false)

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if(!verified) return res.json(false)

    const user = await User.findById(verified.id)
    if(!user) return res.json(false)

    return res.json(true)
  } catch(err){
    res.status(500).json({error: err.message})
  }
})

module.exports = router

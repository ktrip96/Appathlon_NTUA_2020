const router = require("express").Router()
const Crime = require("../models/Crime")
const Area = require("../models/Areas")

// GET ALL CRIMES
router.route("/").get((req, res) => {
  Crime.find()
    .then((crimes) => res.json(crimes))
    .catch((err) => res.status(400).json("Error1 " + err))
})

// GET ALL CRIMES DISTINCT
router.route("/distinct").get((req, res) => {
  Crime.find().distinct("type")
    .then((crimes) => res.json(crimes))
    .catch((err) => res.status(400).json("Error1 " + err))
})

// COUNT ALL CRIMES
router.route("/count").get((req, res) => {
  Crime.estimatedDocumentCount()
    .then((crimes) => res.json({ count: crimes }))
    .catch((err) => res.status(400).json("Error2 " + err))
})

// GET CRIMES WITH PARTICULAR DATE
router.get("/date", (req, res) => {
  const {day,month,year} = req.query
  Crime.find({date: { $gt:new Date(`${year}-${month}-${day}`)}})
  .then((crime)=>{
    res.json(crime)
  })
  .catch((err) => res.status(400).json("Error17: " + err))
})

// GET RANKING OF CRIMES WITH PARTICULAR TYPE OF CRIME

router.get("/complex", (req, res) => {
  const {type, number} = req.query
  Crime.aggregate([
    {$match: {type:type}},
    {$group: {_id:"$area",postedCrimes:{$sum:1}}},
    {$sort: {postedCrimes:-1}}
  ]).limit(Number(number))
  .then((crime)=>{
    res.json(crime)
  })
  .catch((e)=>res.status(400).json("Error 18: " + e))
})


// GET A SPECIFIC CRIME
router.route("/:id").get((req, res) => {
  Crime.findById(req.params.id)
    .then((crime) => res.json(crime))
    .catch((err) => res.status(400).json("Error3: " + err))
})

// ADD A NEW CRIME
router.route("/add").post((req, res) => {
  const type = req.body.type
  const description = req.body.description
  const area = req.body.area
  const date = Date.now()

  const newCrime = new Crime({
    type,
    description,
    area,
    date
  })
  Area.findOne({ name: area }).then((a) => {
    a.postedCrimes = a.postedCrimes + 1
    a.save()
  })
  newCrime
    .save()
    .then(() => res.json("Crime Added"))
    .catch((err) => res.status(400).json("Error 4" + err))
})

// EDIT A CRIME
router.route("/update/:id").post((req, res) => {
  Crime.findById(req.params.id).then((crime) => {
    crime.type = req.body.type
    crime.description = req.body.description
    crime.area = req.body.area

    crime
      .save()
      .then(() => res.json("Crime updated"))
      .catch((err) => res.status(400).json("Error:5 " + err))
  })
})

// DELETE A SPECIFIC CRIME
router.route("/:id").delete((req, res) => {
  Crime.findByIdAndDelete(req.params.id)
    .then(() => res.json("Crime deleted"))
    .catch((err) => res.status(400).json("Error:6 " + err))
})


module.exports = router

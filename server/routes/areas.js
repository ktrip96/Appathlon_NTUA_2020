const router = require('express').Router()
const Area = require('../models/Areas')
const { db } = require('../models/Areas')

// GET ALL AREAS
router.route('/').get((req, res) => {
    Area.find()
    .then(areas => res.json(areas))
    .catch(err => res.status(400).json('Error '+ err))
})

// COUNT ALL AREAS
router.route('/count').get((req,res) => {
    Area.estimatedDocumentCount()
    .then(areas => res.json({count:areas}))
    .catch(err => res.status(400).json('Error '+ err))
})

// TEST QUERY
router.route('/test').get((req,res) => {
    Area.aggregate(
        [
            {$sort: {validCrimes: -1}}
        ]
    ).limit(req.body.number)
    .then(areas => res.json(areas))
    .catch(err => res.status(400).json('Error '+ err))
})

// ADD NEW AREA
router.route('/add').post((req,res)=>{
  const name = req.body.name
  const validCrimes = req.body.validCrimes
  const postedCrimes = req.body.postedCrimes
  const newArea = new Area({
      name,
      validCrimes,
      postedCrimes
    })

  newArea.save()
  .then(()=>res.json("Area Added"))
  .catch(err => res.status(400).json('Error ' + err))
  
})

// EDIT AN AREA
router.route('/update/:id').post((req,res)=>{
    Area.findById(req.params.id)
      .then(area => {
        area.validCrimes = req.body.validCrimes + 1;
        
        area.save()
          .then(() => res.json('Area updated'))
          .catch(err => res.status(400).json('Error: ' + err))
      })
  })
  


module.exports = router;
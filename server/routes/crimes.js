const router = require('express').Router()
const Crime = require('../models/Crime')


// GET ALL CRIMES 
router.route('/').get((req, res) => {
    Crime.find()
    .then(crimes => res.json(crimes))
    .catch(err => res.status(400).json('Error '+ err))
})

// GET A SPECIFIC CRIME
router.route('/:id').get((req,res)=>{
  Crime.findById(req.params.id)
    .then(crime => res.json(crime))
    .catch(err => res.status(400).json("Error: " + err))
})

// ADD A NEW CRIME
router.route('/add').post((req,res)=>{
  const type = req.body.type
  const description = req.body.description
  const area = req.body.area
  // const date = Date.parse(req.body.date)

  const newCrime = new Crime({
    type,
    description,
    area
  })

  newCrime.save()
  .then(()=>res.json("Crime Added"))
  .catch(err => res.status(400).json('Error ' + err))
  
})

// EDIT A CRIME
router.route('/update/:id').post((req,res)=>{
  Crime.findById(req.params.id)
    .then(crime => {
      crime.type = req.body.type;
      crime.description = req.body.description;
      crime.area = req.body.area;

      crime.save()
        .then(() => res.json('Crime updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
})

// DELETE A SPECIFIC CRIME
router.route('/:id').delete((req,res)=>{
  Crime.findByIdAndDelete(req.params.id)
    .then(() => res.json("Crime deleted"))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;
// Submits a post

// router.post('/',(req,res)=>{
//   const post = new Crime({
//     title: req.body.title,
//     description: req.body.description
//   })

//   // creates a promise
//   post.save()
//   .then(data=>{
//     res.json(data)
//   })
//   .catch(error=>{
//     res.json({message:error})
//   })
// })

// router.get('/:postId', (req,res)=>{
//   console.log(req.params.postId)
// })


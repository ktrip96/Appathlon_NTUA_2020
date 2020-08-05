const router = require('express').Router()
const Crime = require('../models/Crime')
  
router.route('/').get((req, res) => {
    Crime.find()
    .then(crimes => res.json(crimes))
    .catch(err => res.status(400).json('Error '+ err))
})

router.route('/add').post((req,res)=>{
  const type = req.body.type
  const description = req.body.description
  // const date = Date.parse(req.body.date)

  const newCrime = new Crime({
    type,
    description,
  })

  newCrime.save()
  .then(()=>res.json("Crime Added"))
  .catch(err => res.status(400).json('Error ' + err))
  
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


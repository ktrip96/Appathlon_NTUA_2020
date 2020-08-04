const express = require('express')
const router = express.Router();
const Post = require('../models/Post')
  
router.get("/",  (req, res) => {
    res.send("We are on post")
    // try {
    //   const posts = await Post.find()
    //   res.json(posts)
    // } catch (err) { 
    //   res.json({ message:err})
    // }
})

router.get("/1",(req,res)=>{
    res.send("We are at post number 1")
})

// Submits a post

router.post('/',(req,res)=>{
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  // creates a promise
  post.save()
  .then(data=>{
    res.json(data)
  })
  .catch(error=>{
    res.json({message:error})
  })
})

router.get('/:postId', (req,res)=>{
  console.log(req.params.postId)
})

module.exports = router;
const express = require('express')

const router = express.Router();


  
router.get("/", (req, res) => {
    res.send("We are on post")
  })

router.get("/1",(req,res)=>{
    res.send("We are at post number 1")
})

module.exports = router;
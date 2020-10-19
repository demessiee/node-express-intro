const express = require('express')
const Post = require('../models/post.js')
const router = express.Router()

router.use(express.json()); 


router.get('/', async (req, res) => {
    let result = await Post.find({})
    console.log(result)
    res.json(result)
})

router.post('/post', async (req, res) => {
    
    let post = new Post({
        user_id:req.body.user_id,
        content:req.body.content
    })

    if(req.body.user_id === null)
        res.status(400).send("user_id not found")

    let result = await post.save()
    res.json(result)
    
})



module.exports = router
const express = require('express')
const User = require('../models/user.js')
const router = express.Router()

router.use(express.json()); 


router.get('/', async (req, res) => {
    let result = await User.find({})
    res.json(result)
})

router.get('/user/:id', async (req, res) => {
    let result = await User.find({_id:req.params.id})
    res.json(result)
})


router.post('/login', async (req, res) => {
    
    if(req.body.id === null || req.body.password === null)
        res.status(400).send("id or password is null")


    
    let user = await User.findOne({_id:req.body.id,password:req.body.password})
    if(user === null){
        res.json({validUser:false})
    }else{
        res.json({validUser:false})
    }
    
})


router.post('/user', async (req, res) => {
    
    let user = new User({
        _id:req.body.id,
        password:req.body.password
    })

    if(req.body.id === null)
        res.status(400).send("id not found")

    let result = await user.save()
    res.json(result)
    
})

router.put('/user', async (req, res) => {

    if(req.body.id === null)
        res.status(400).send("id not found")

    let user = await User.findOne({_id:req.body.id})

    user.full_name = req.body.full_name || "N/A"
    user.biography = req.body.biography || "N/A"
    user.experiences = req.body.experiences|| "N/A"
    user.department = req.body.department || "N/A"
    user.connections = req.body.connections || []
    user.connectionRequests = req.body.connectionRequests || []

    let result = await user.save()
    res.json(result)
})

router.delete('/user/:id', async (req, res) => {
    if(req.params.id === null)
        res.status(400).send("id not found")
    let result = await User.deleteOne({_id:req.params.id})
    res.json(result)
})

module.exports = router
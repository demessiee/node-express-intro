const express = require('express')
const Employee = require('../models/employee.js')
const jwtAuth = require('../middleware/jwtAuth.js')

const router = express.Router()

router.use(express.json()); 
router.use(jwtAuth)

//Lab 1D endpoints
router.get('/employee/id/:id', async (req, res) => {
    let result = await Employee.find({_id:req.params.id})
    res.json(result)
})

router.get('/employee/search/:search', async (req, res) => {
    let search = req.params.search

    let result = await Employee.find({ $or:[ {'email':new RegExp(search,"g")}, {'first_name':new RegExp(search,"g")}, {'last_name':new RegExp(search,"g")}]})
    res.json(result)

});


router.get('/employee/department/:department', async (req, res) => {
    let result = await Employee.find({department:req.params.department})
    res.json(result)
})

router.get('/employee/promoted/:year', async (req, res) => {
    let result = await Employee.find({last_promoted:req.params.year})
    res.json(result)
})



//Unit 2A Endpoints

router.get('/employee/salary', async (req, res) => {

    let high = req.query.high
    let low = req.query.low

    let result = await Employee.find({ $and:[ {'salary':{$lte : high}}, {'salary':{$gte : low}}]})
    res.json(result)


})

router.get('/employees', async (req, res) => {
    let result = await Employee.find({})
    res.json(result)
})

router.post('/employee', async (req, res) => {
    
    let employee = new Employee({
        _id:req.body.id,
        first_name:req.body.first_name || "N/A",
        last_name:req.body.last_name || "N/A",
        email:req.body.email || "N/A",
        department:req.body.department || "N/A",
        last_promoted:req.body.last_promoted || 2021,
        salary:req.body.salary || 0
    })
    if(req.body.id === null)
        res.status(400).send("id not found")

    let result = employee.save()
    res.json(result)
        

    
})

router.put('/employee', async (req, res) => {

    if(req.body.id === null)
        res.status(400).send("id not found")

    let employee = await Employee.findOne({_id:req.body.id})

    employee.first_name = req.body.first_name || "N/A"
    employee.last_name = req.body.last_name || "N/A"
    employee.email = req.body.email || "N/A"
    employee.department = req.body.department || "N/A"
    employee.last_promoted = req.body.last_promoted || 2021
    employee.salary = req.body.salary || 0

    let result = await employee.save()
    res.json(result)
})

router.delete('/employee/:id', async (req, res) => {
    if(req.params.id === null)
        res.status(400).send("id not found")

    let result = await Employee.deleteOne({_id:req.params.id})
    res.json(result)
})

module.exports = router
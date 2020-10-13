const express = require('express')
const json = require('../public/employee_data.json')
const router = express.Router()

router.use(express.json()); 


//Lab 1D endpoints
router.get('/employee/id/:id', (req, res) => {
    let result = json.filter(x => x._id === req.params.id)
    res.json(result)
})

router.get('/employee/search/:search', (req, res) => {
    let result = json.filter(x => {
        if( x.email.includes(req.params.search) || x.first_name.includes(req.params.search) || x.last_name.includes(req.params.search)){
            return true
        }else{
            return false
        }
    })
    res.json(result)

})

router.get('/employee/department/:department', (req, res) => {
    let result = json.filter(x => x.department === req.params.department)
    res.json(result)
})

router.get('/employee/promoted/:year', (req, res) => {
    let result = json.filter(x => x.last_promoted == req.params.year)
    res.json(result)
})



//Unit 2A Endpoints

router.get('/employee/salary', (req, res) => {
    let result = json.filter(x => {
        if(x.salary <= parseFloat(req.query.high) && x.salary >= parseFloat(req.query.low)){
            return true
        }else{
            return false
        }
    })
    res.json(result)
})

router.get('/employees', (req, res) => {
    res.json(json)
})

router.post('/employee', (req, res) => {
    let employee = {
        _id:req.body.id,
        first_name:req.body.first_name || "N/A",
        last_name:req.body.last_name || "N/A",
        email:req.body.email || "N/A",
        department:req.body.department || "N/A",
        last_promoted:req.body.last_promoted || 2021,
        salary:req.body.salary || 0
    }
    if(req.body.id === null)
        throw new Error("id is null")
    if(json.some( x => x._id === req.body.id)){
        for(let i = 0; i < json.length; i++){
            if(json[i]._id === req.body.id){
                json[i] === employee
            }
            res.json(employee)
        }
    }else{
        json.push(employee)
        res.json(employee)

    }
})

router.put('/employee', (req, res) => {
    let employee = {
        _id:req.body.id,
        first_name:req.body.first_name || "N/A",
        last_name:req.body.last_name || "N/A",
        email:req.body.email || "N/A",
        department:req.body.department || "N/A",
        last_promoted:req.body.last_promoted || 2021,
        salary:req.body.salary || 0
    }
    if(req.body.id === null)
        throw new Error("id is null")
    if(json.some( x => x._id === req.body.id)){
        for(let i = 0; i < json.length; i++){
            if(json[i]._id === req.body.id){
                json[i] === employee
            }
            res.json(employee)
        }
    }else{
        json.push(employee)
        res.json(employee)
    }
})

router.delete('/employee', (req, res) => {
    if(req.params.id === null)
        throw new Error("id is null")
    if(json.some( x => x._id === req.params.id)){
        let index = -1
        for(let i = 0; i < json.length; i++){
            if(json[i]._id === req.query.id){
                index = i
                break;
            }
            let deletedJson = [...json.slice(0,index),...json.slice(index+1,json.length)]
            res.json(deletedJson)
        }
    }else{
        throw new Error("id doesnt exists")
    }
})

module.exports = router
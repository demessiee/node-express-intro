const express = require('express')
const bcrypt = require('bcrypt')

const Company = require('../models/company.js')

const companyAuth = require('../middleware/companyAuth.js')
let COMPANY_JWT_SECRET_KEY = process.env.COMPANY_JWT_SECRET_KEY

const router = express.Router()

router.use(express.json()); 
router.use(companyAuth)

/*
Companies
* GET /companies/ - sends a list of all companies
* GET /companies/company/:id - sends company with specified id
* POST /companies/company - inserts company with specified body
* PUT /companies/company - updates company with specified body
* DELETE /companies/company/:id - deletes company with specified body
* POST /companies/login - authenticates a company's credentials and then sends a JWT token if successful
*/


router.get('/companies', async (req, res) => {
    let result = await Company.find({})
    res.json(result)
})

router.get('/companies/company/:id', async (req, res) => {
    let result = await Company.find({_id:req.params.id})
    res.json(result)
})

router.post('/companies/company', async (req, res) => {

    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if(err)
            res.status(400).send("Hashing Error")

        let company = new Company({ 
            _id: req.body.id, 
            password: hash
        })
        let result = await company.save()
        res.json(result)
    });
})

router.put('/companies/company', companyAuth, async (req, res) => {
    if(req.user.id !== req.body.id){
        res.status(400).send("You can not modify this resource")
    }
    let company = new Company({ 
        _id: req.body.id, 
        password: hash
    })
    let result = await company.save()
    res.json(result)
   
})

router.delete('/companies/company/:id', companyAuth, async (req, res) => {
    if(req.user.id !== req.params.id){
        res.status(400).send("You can not modify this resource")
    }
    let result = await Company.deleteOne({_id:req.params.id})
    res.json(result)

})

router.post('/companies/login', (req, res) => {
    Companies.findOne({_id: req.body.id, function(err,result) { 
        if(err)
            res.status(400).send("Database Error")
        if(result === null)
            res.send("Invalid login credentials")
        else{
            bcrypt.compare(req.body.password, result.password, function(err, result) {
                if(result === true){
                  res.json({
                    token: jwt.sign({ id: req.body.id }, COMPANY_JWT_SECRET_KEY)
                  });
                }else{
                  res.send("invalid login credentials")
                }
            })
        }
    }})
})


module.exports = router
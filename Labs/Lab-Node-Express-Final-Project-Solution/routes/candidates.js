const express = require('express')
const bcrypt = require('bcrypt')

const Candidate = require('../models/candidate.js')
const Job = require('../models/job.js')

const candidateAuth = require('../middleware/candidateAuth.js')
const utils = require('../src/utils.js') 
let CANDIDATE_JWT_SECRET_KEY = process.env.CANDIDATE_JWT_SECRET_KEY

const router = express.Router()

router.use(express.json()); 
router.use(candidateAuth)

/*
* GET /candidates/ - sends a list of all candidates
* GET /candidates/candidate/:id - sends candidate with specified id
* POST /candidates/candidate - inserts candidate with specified body
* PUT /candidates/candidate - updates candidate with specified body
* DELETE /candidates/candidate/:id - deletes candidate with specified id
* GET /candidates/candidate/:id/jobs - gets a list of all jobs applied to by candidate with specified id
* POST /candidates/login - authenticates a candidates's credentials and then sends a JWT token if successful
*/

router.get('/candidates', async (req, res) => {
    let result = await Candidate.find({})
    res.json(result)
})

router.get('/candidates/candidate/:id', async (req, res) => {
    let result = await Candidate.find({_id:req.params.id})
    res.json(result)
})

router.post('/candidates/candidate', async (req, res) => {

    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if(err)
            res.status(400).send("Hashing Error")


        let candidate = new Candidate({ 
            _id: req.body.id, 
            full_name: req.body.full_name, 
            password: hash,
            skills: req.body.skills,
            years_of_exp: req.body.years_of_exp
        })
        let result = await candidate.save()
        res.json(result)
    });
})

router.put('/candidates/candidate', candidateAuth, async (req, res) => {
    if(req.user.id !== req.body.id){
        res.status(400).send("You can not modify this resource")
    }
    let candidate = new Candidate({ 
        _id: req.body.id, 
        full_name: req.body.full_name, 
        password: req.body.password,
        skills: req.body.skills,
        years_of_exp: req.body.years_of_exp
    })
    let result = await candidate.save()
    res.json(result)
   
})

router.delete('/candidates/candidate/:id', candidateAuth, async (req, res) => {
    if(req.user.id !== req.params.id){
        res.status(400).send("You can not modify this resource")
    }
    let result = await Candidate.deleteOne({_id:req.params.id})
    res.json(result)

})

router.get('/candidates/candidate/:id/jobs', candidateAuth, async (req, res) => {
    if(req.user.id !== req.params.id){
        res.status(400).send("You can not modify this resource")
    }
    let jobs = await Job.find({})
    let result = utils.getAppliedJobs(req.params.id,jobs)
    res.json(result)
})

router.post('/candidates/login', (req, res) => {
    Candidate.findOne({_id: req.body.id, function(err,result) { 
        if(err)
            res.status(400).send("Database Error")

        if(result === null)
            res.send("Invalid login credentials")
        else{
            bcrypt.compare(req.body.password, result.password, function(err, result) {
                if(result === true){
                  res.json({
                    token: jwt.sign({ id: req.body.id }, CANDIDATE_JWT_PRIVATE_KEY)
                  });
                }else{
                  res.send("invalid login credentials")
                }
            })
        }
    }})
})


module.exports = router
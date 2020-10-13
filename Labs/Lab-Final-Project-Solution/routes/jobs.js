const express = require('express')
const Job = require('../models/job.js')

const candidateAuth = require('../middleware/candidateAuth.js')
const companyAuth = require('../middleware/companyAuth.js')
const utils = require('../src/utils.js') 
const Candidate = require('../models/candidate.js')


const router = express.Router()

router.use(express.json()); 
router.use(companyAuth)

/*
* GET /jobs/ - sends a list of all jobs
* GET /jobs/job/:id - sends job with specified id
* GET /jobs/search/:search - sends a list of all jobs that include the search query within the title, company name, or skills list
* POST /jobs/job - inserts job with specified body. The company_id should be taken from the encoded id in JWT.
* PUT /jobs/job - updates job with specified body
* DELETE /jobs/job/:id - deletes job with specified id
* GET /jobs/job/:id/candidates - sends a list of all candidates who applied to a job with specified id
* GET /jobs/job/:id/qualified - sends a list of all candidates who applied to a job with specified id who pass all the specified job skill requirements
* PUT /jobs/job/:id/apply/ - updates the candidate list and qualified list for the specified job id with the candidate id encoded in the JWT. Only candidates who have the necessary years of experience and all listed job skills can be added to the qualified list.
*/


router.get('/jobs', async (req, res) => {
    let result = await Job.find({})
    res.json(result)
})

router.get('/jobs/job/:id', async (req, res) => {
    let result = await Job.find({_id:req.params.id})
    res.json(result)
})

router.get('/jobs/search/:search', async (req, res) => {
    let jobsList = await Job.find({_id:req.params.id})
    let result = utils.searchJobs(req.params.search,jobsList)
    res.json(result)
})

router.post('/jobs/job', companyAuth, async (req, res) => {
    let job = new Job({ 
        company_id: req.user.id, 
        skills: req.body.skills,
        years_of_exp_required: req.body.years_of_exp_required,
        candidates:req.body.candidates,
        qualified:req.body.qualified
    })
    let result = await job.save()
    res.json(result)
})

router.put('/jobs/job', companyAuth, async (req, res) => {
    if(req.user.id !== req.body.company_id){
        res.status(400).send("You can not modify this resource")
    }
    let job = new Job({ 
        company_id: req.body.company_id, 
        skills: req.body.skills,
        years_of_exp_required: req.body.years_of_exp_required,
        candidates:req.body.candidates,
        qualified:req.body.qualified
    })
    let result = job.save()
    res.json(result)
   
})

router.delete('/jobs/job/:id', companyAuth, async (req, res) => {

    let job = await Job.findOne({_id:req.params.id})
    if(req.user.id !== job.company_id){
        res.status(400).send("You can not modify this resource")
    }
    let result = await Job.deleteOne({_id:req.params.id})
    res.json(result)

})

router.get('/jobs/job/:id/candidates', companyAuth, async (req, res) => {
    let job = await Job.findOne({_id:req.params.id})
    if(req.user.id !== job.company_id){
        res.status(400).send("You can not modify this resource")
    }
    let result = await Job.find({_id:req.params.id})
    res.json(result.candidates)
})


router.get('/jobs/job/:id/qualified', companyAuth, async (req, res) => {
    let job = await Job.findOne({_id:req.params.id})
    if(req.user.id !== job.company_id){
        res.status(400).send("You can not modify this resource")
    }
    let result = await Job.find({_id:req.params.id})
    res.json(result.qualified)
})


router.put('/jobs/job/:id/apply/', candidateAuth, async (req, res) => {
    let job = await Job.find({_id:req.params.id})
    let candidate = await Candidate.find({_id:req.user.id})
    utils.filterCandidate(candidate,job)
    res.json(result)
})




module.exports = router
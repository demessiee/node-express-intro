const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


const candidates = require('./routes/candidates.js')
const companies = require('./routes/companies.js')
const jobs = require('./routes/jobs.js')


const app = express()
const port = 3000


mongoose.connect('mongodb://localhost:27017/final',{ useNewUrlParser: true }).then( () => {

  app.use('/candidates',candidates)
  app.use('/companies',companies)
  app.use('/jobs',jobs)

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})


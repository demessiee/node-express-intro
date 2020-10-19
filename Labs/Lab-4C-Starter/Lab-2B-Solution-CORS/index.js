const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')

const employees = require('./routes/employee.js')
const app = express()
const port = 8000

let corsOptions = {
  origin: 'http://localhost:3000', //change this to your client's URL if its not on 3001
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true }).then( () => {
  app.use(cors(corsOptions))
  app.use("/static",express.static(path.join(__dirname, 'public')))

  app.use('/api',employees)

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})


const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')

const user = require('./routes/user.js')
const app = express()
const port = 8080

let corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

mongoose.connect('mongodb://localhost:27017/final',{ useNewUrlParser: true }).then( () => {

  app.use(cors(corsOptions))
  app.use("/static",express.static(path.join(__dirname, 'public')))

  app.use('/api/users',user)

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})


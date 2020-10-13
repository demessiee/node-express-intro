const express = require('express')
const path = require('path')
const employees = require('./routes/employee.js')
const app = express()
const port = 3000



app.use("/static",express.static(path.join(__dirname, 'public')))

app.use('/api',employees)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

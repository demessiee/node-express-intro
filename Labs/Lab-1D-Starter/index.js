const express = require('express')
const json = require('./public/employee_data.json') //contains employee data, try printing it out
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send("Hello World")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

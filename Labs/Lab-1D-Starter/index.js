const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

//starter code to read from a JSON file, and convert its contents into a json object you can use
app.get('/', (req, res) => {
  fs.readFile('./public/employee_data.json', (err, data) => {
    if (err) throw err;
    let json = JSON.parse(data); //JSON.parse will parse the contents of the file into json object you can use
    res.json(json)
  });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

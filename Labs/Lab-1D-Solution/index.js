const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.use("/static",express.static(path.join(__dirname, 'public')))


app.get('/api/employee/id/:id', (req, res) => {
    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let result = json.filter(x => x._id === req.params.id)
        res.json(result)
    });
})

app.get('/api/employee/search/:search', (req, res) => {
    
    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let result = json.filter(x => {
            if( x.email.includes(req.params.search) || x.first_name.includes(req.params.search) || x.last_name.includes(req.params.search)){
                return true
            }else{
                return false
            }
        })
        res.json(result)
    });
})

app.get('/api/employee/department/:department', (req, res) => {
    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let result = json.filter(x => x.department === req.params.department)
        res.json(result)
    });
})

app.get('/api/employee/promoted/:year', (req, res) => {

    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let result = json.filter(x => x.last_promoted == req.params.year)
        res.json(result)
    });
    
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

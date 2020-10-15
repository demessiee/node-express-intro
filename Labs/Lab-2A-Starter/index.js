const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.use("/static",express.static(path.join(__dirname, 'public')))



/* example to read from a JSON file, parse the incoming data into a JSON object, 
modify the data then convert the modified data into a JSON stringify 
before writing it out to a file

fs.readFile('./public/employee_data.json', (err, data) => {
    if (err) throw err;
    let json = JSON.parse(data); //parse file data into json object
    json = json.slice(0,5) //modify json object
    let data = JSON.stringify(json, null, 2); //convert modified json object into JSON string
    fs.writeFile('./public/employee_data.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
        res.json(json) //send back modified data as a response to the client
    });
});
*/

app.get('/api/employee/id/:id', (req, res) => {
    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let result = json.filter(x => x._id === req.params.id)
        res.json(result)
    });
})


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

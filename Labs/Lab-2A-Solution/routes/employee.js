const express = require('express')
const fs = require('fs')
const router = express.Router()

router.use(express.json()); 


//Lab 1D endpoints
router.get('/employee/id/:id', (req, res) => {
    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let result = json.filter(x => x._id === req.params.id)
        res.json(result)
    });
})

router.get('/employee/search/:search', (req, res) => {
    
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

router.get('/employee/department/:department', (req, res) => {
    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let result = json.filter(x => x.department === req.params.department)
        res.json(result)
    });
})

router.get('/employee/promoted/:year', (req, res) => {

    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let result = json.filter(x => x.last_promoted == req.params.year)
        res.json(result)
    });
    
})




//Unit 2A Endpoints

router.get('/employee/salary', (req, res) => {
    
    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let result = json.filter(x => {
            if(x.salary <= parseFloat(req.query.high) && x.salary >= parseFloat(req.query.low)){
                return true
            }else{
                return false
            }
        })
        res.json(result)
    })
                
})

router.get('/employees', (req, res) => {
    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        res.json(json)
    })
})

router.post('/employee', (req, res) => {

    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);

        let employee = {
            _id:req.body.id,
            first_name:req.body.first_name || "N/A",
            last_name:req.body.last_name || "N/A",
            email:req.body.email || "N/A",
            department:req.body.department || "N/A",
            last_promoted:req.body.last_promoted || 2021,
            salary:req.body.salary || 0
        }
        if(req.body.id === null)
            res.status(400).send("id not found")
        if(json.some( x => x._id === req.body.id)){
            //id exists, so update the existing id
            for(let i = 0; i < json.length; i++){
                if(json[i]._id === req.body.id){
                    json[i] = employee
                    let data = JSON.stringify(json, null, 2);

                    fs.writeFile('./public/employee_data.json', data, (err) => {
                        if (err) throw err;
                        console.log('Data written to file');
                        res.json(employee)
                        return
                    });
                }

            }
        }else{
            json.push(employee)
            let data = JSON.stringify(json, null, 2);

            fs.writeFile('./public/employee_data.json', data, (err) => {
                if (err) throw err;
                console.log('Data written to file');
                res.json(employee)
            });
        }
    });


})

router.put('/employee', (req, res) => {
    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);


        let employee = {
            _id:req.body.id,
            first_name:req.body.first_name || "N/A",
            last_name:req.body.last_name || "N/A",
            email:req.body.email || "N/A",
            department:req.body.department || "N/A",
            last_promoted:req.body.last_promoted || 2021,
            salary:req.body.salary || 0
        }
        if(req.body.id === null){
            res.status(400).send("id not found")
        }
        if(json.some( x => x._id === req.body.id)){
            //id exists, so update the existing employee
            for(let i = 0; i < json.length; i++){
                if(json[i]._id === req.body.id){
                    json[i] = employee
                    let data = JSON.stringify(json, null, 2);

                    fs.writeFile('./public/employee_data.json', data, (err) => {
                        if (err) throw err;
                        console.log('Data written to file');
                        res.json(employee)
                        return
                    });
                }

            }
        }else{
            //id doesnt exist, so add new employee
            json.push(employee)
            let data = JSON.stringify(json, null, 2);

            fs.writeFile('./public/employee_data.json', data, (err) => {
                if (err) throw err;
                console.log('Data written to file');
                res.json(employee)
                return
            });
        }
    });
})

router.delete('/employee/id/:id', (req, res) => {

    fs.readFile('./public/employee_data.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
    
        if(req.params.id === null)
            res.status(400).send("id not found")
        if(json.some( x => x._id === req.params.id)){
            //id exists, so delete existing employee
            let index = -1
            for(let i = 0; i < json.length; i++){
                //find index to delete
                if(json[i]._id === req.params.id){
                    index = i
                    break;
                }
                
            }
            if(index === -1){  
                //if we couldnt find the index
                res.status(400).send("id not found")
            }
            let deleted = json[index]
            json = [...json.slice(0,index),...json.slice(index+1,json.length)]
            let data = JSON.stringify(json, null, 2);

            fs.writeFile('./public/employee_data.json', data, (err) => {
                if (err) throw err;
                console.log('Data written to file');
                res.json(deleted)
            });
        }else{
            res.status(400).send("id not found")
        }


    });




    
})

module.exports = router
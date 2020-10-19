const fs = require('fs')
const csvtojson = require('csvtojson')
const { parse } = require('json2csv');
 



const inputFilePath = process.argv[2]
const outputFilePath = process.argv[3]

console.log(inputFilePath,outputFilePath)


csvtojson()
.fromFile(inputFilePath)
.then((data)=>{
    console.log(data.length);
    let updated = data.map( x => {

        let id = x.id
        let first_name = x.first_name
        let last_name = x.last_name
        let email = x.email
        let department = x.department
        let last_promoted = x.last_promoted
        let salary = x.salary

        if(x.department === "Engineering"){
            if(x.last_promoted <= 2018){
                last_promoted = '2021'
                salary = (x.salary * 1.20).toString()
            }
        }
        
        if(x.department === "Marketing"){
            if(x.last_promoted <= 2017){
                last_promoted = '2021'
                salary = (x.salary * 1.05).toString()
            }
        }

        if(x.department === "Research and Development"){
            salary = (x.salary * 0.95).toString()
        }

        if(x.department === "Services"){
            department = "Support"
        }

        if(x.department === "Sales"){
            if(x.salary > 100000){
                return null
            }
        }

        if(x.email === ""){
            email = first_name[0] + last_name + "@abc.com"
        }

        return {
            id,
            first_name,
            last_name,
            email,
            department,
            last_promoted,
            salary

        }
    })
    let updatedNoNull = updated.filter(x => x !== null)
    
    //console.log(updatedNoNull.length)


    const fields = [
        'id',
        'first_name',
        'last_name',
        'email',
        'department',
        'last_promoted',
        'salary'
    ];
    const opts = { fields };
    
    try {
        const csv = parse(updatedNoNull, opts);
        console.log(csv);
        fs.writeFile(outputFilePath, csv, (err) => {
            if (err) throw err;
                console.log('The file has been saved!');
                fs.writeFile(outputFilePath, csv, (err) => {
                    if (err) throw err;
                        console.log('The file has been saved!');
                });
                
        });
        
    } catch (err) {
        console.error(err);
}
})

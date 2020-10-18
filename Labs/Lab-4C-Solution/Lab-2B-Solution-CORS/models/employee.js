const mongoose = require('mongoose')

const { Schema } = mongoose; 

const employeeSchema = new Schema({ 
    _id: { type: String, required: true },
    first_name: { type: String, default: "N/A" },
    last_name: { type: String, default: "N/A" },
    email: { type: String, default: "N/A" },
    department :{ type: String, default: "N/A" },
    last_promoted: { type: Number, default: 2021 },
    salary: { type: Number, default: 0 },
});


const Employee = mongoose.model('Employee', employeeSchema); 

module.exports = Employee
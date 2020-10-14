const mongoose = require('mongoose')

const { Schema } = mongoose; 

const companySchema = new Schema({ 
    _id:{ type: String, required: true }, 
    password:{ type: String, required: true }
})

const Company = mongoose.model('Company', companySchema); 

module.exports = Company
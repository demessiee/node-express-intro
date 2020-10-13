const mongoose = require('mongoose')

const { Schema } = mongoose; 

const candidateSchema = new Schema({ 
    _id:{ type: String, required: true }, 
    full_name: { type: String, required: true }, 
    password:{ type: String, required: true },
    skills:{ type: [String], default: []},
    years_of_exp: { type: String, default: 0 }
})

const Candidate = mongoose.model('Candidate', candidateSchema); 

module.exports = Candidate
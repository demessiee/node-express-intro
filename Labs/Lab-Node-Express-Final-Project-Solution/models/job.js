const mongoose = require('mongoose')

const { Schema } = mongoose; 

const jobSchema = new Schema({ 
    company_id:{ type: String, required: true }, 
    title: { type: String, required: true }, 
    skills:{ type: [String], default: []},
    years_of_exp_required: { type: String, default: 0 },
    candidates:{ type: [String], default: []},
    qualified:{ type: [String], default: []}
})

const Job = mongoose.model('Job', jobSchema); 

module.exports = Job
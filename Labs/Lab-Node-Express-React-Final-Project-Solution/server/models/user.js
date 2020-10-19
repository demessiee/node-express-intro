const mongoose = require('mongoose')

const { Schema } = mongoose; 

const userSchema = new Schema({ 
    _id: { type: String, required: true },
    password: { type: String, required: true },
    full_name: { type: String, default: "N/A" },
    biography: { type: String, default: "N/A" },
    connections:{ type: [String], default: [] },
});


const User = mongoose.model('User', userSchema); 

module.exports = User
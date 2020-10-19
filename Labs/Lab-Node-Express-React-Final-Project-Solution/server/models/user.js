const mongoose = require('mongoose')

const { Schema } = mongoose; 

const userSchema = new Schema({ 
    _id: { type: String, required: true },
    password: { type: String, required: true },
    full_name: { type: String, default: "N/A" },
    biography: { type: String, default: "N/A" },
    experiences:{ type: [String], default: [] },
    connections:{ type: [String], default: [] },
    connectionRequests:{ type: [String], default: [] }
});


const User = mongoose.model('User', userSchema); 

module.exports = User
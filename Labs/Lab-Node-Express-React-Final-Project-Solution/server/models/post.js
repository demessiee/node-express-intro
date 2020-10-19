const mongoose = require('mongoose')

const { Schema } = mongoose; 

const postSchema = new Schema({ 
    user_id: { type: String, required: true },
    content: { type: String, default: "N/A" }
});


const Post = mongoose.model('Post', postSchema); 

module.exports = Post
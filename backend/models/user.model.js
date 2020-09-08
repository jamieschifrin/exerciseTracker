const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        // trim means remove white space after the string
        trim: true,
        minLength: 3
    }
}, {timestamps:true})

const User = mongoose.model("user",userSchema);
module.exports = User;



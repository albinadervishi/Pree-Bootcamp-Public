const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String,
        minlength: [3, "emri duhet te jete me i gjate se 3 "] ,
        required: [true,"This field is required"]
    },
    email: {
        type: String,
        required: [true,"This field is required"]
    },
    imgURL: {
        type: String,
        required: [true,"This field is required"]
    },
    role:{
        type: String,
        required: [true,"This field is required"]
    },
    belt: {
        type: Boolean,
        default: 'false'
    },
    degree: {
        type: Boolean,
        default: 'false'
    }
        
},
 { timestamps: true });
module.exports = mongoose.model('User', UserSchema);
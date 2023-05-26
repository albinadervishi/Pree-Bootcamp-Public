const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: { type: String,
        minlength: [3, "emri duhet te jete me i gjate se 3 "] ,
        required: [
            true,
            "firstName is required"
        ],
        validate: {
            validator: function (value) {
            return !/cake/i.test(value);
        },
        message: 'Name cannot contain the string "cake" in any casing.',
        },
    },
        
},
 { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);

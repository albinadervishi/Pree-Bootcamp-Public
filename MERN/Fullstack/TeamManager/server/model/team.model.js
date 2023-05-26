const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    firstName: { type: String,
        minlength: [2, "emri duhet te jete me i gjate se 2 "] ,
        required: [
            true,
            "firstName is required"
        ]
    },
    position: {
        type: String
    },
    gameOne: {
        type: String,
        default: 'Undecided'
    },
    gameTwo:{
        type: String,
        default: 'Undecided'
    },
    gameThree: {
        type: String,
        default: 'Undecided'
    }
        
},
 { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;



const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
        minlenght: 6,
        maxlenght: 1024,

    },
    date: {
        type: Date,
        default: Date.now,
    },

    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User',
    },
});


module.exports = mongoose.model('user', UserSchema);
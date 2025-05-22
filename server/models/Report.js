const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        minlength: 2
    },
    user1: {
        type: String,
        required: true
    },
    user2: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', usersSchema)
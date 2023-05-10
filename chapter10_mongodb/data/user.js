const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userid: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    refreshToken: {
        type: String
    }
}, {
    id: true
})

module.exports = mongoose.model('User', userSchema)
const mongoose = require('mongoose')
const Schama = mongoose.Schema

const account = new Schama({
    user: String,
    pass: String,
}, {
    timestamps: true,
})

module.exports = mongoose.model('users', account)
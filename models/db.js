const mongoose = require('mongoose')

function connect() {
    try {
        mongoose.connect('mongodb+srv://quangadmin:quangc123@cluster0.swci5kg.mongodb.net/ghichuDB')
        console.log('✔✔✔')
    } catch (error) {
        console.log('🛠🛠🛠')
    }
}
module.exports = { connect }
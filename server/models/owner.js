const mongoose = require('mongoose')
const Shema = mongoose.Schema

const OwnerShema = new Shema({
    name: String,
    about: String,
    photo: String
})

module.exports = mongoose.model('Owner', OwnerShema)
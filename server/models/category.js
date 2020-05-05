const mongoose = require('mongoose')
const Shema = mongoose.Schema

const CategoryShema = new Shema({
    type: { type: String, unique: true, required: true }
})

module.exports = mongoose.model('Category', CategoryShema)
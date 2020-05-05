const mongoose = require('mongoose')
const Shema = mongoose.Schema

const UserShema = new Shema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: { type: Shema.Types.ObjectId, ref: 'Address' }
})

module.exports = mongoose.model('User', UserShema)
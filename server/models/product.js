const mongoose = require('mongoose')
const Shema = mongoose.Schema

const ProductShema = new Shema({
    category: { type: Shema.Types.ObjectId, ref: 'Category' },
    owner: { type: Shema.Types.ObjectId, ref: 'owner'},
    title: String,
    description: String,
    photo: String,
    price: Number,
    stockQuantity: Number,
    rating: [Number]
})

module.exports = mongoose.model('Product', ProductShema)
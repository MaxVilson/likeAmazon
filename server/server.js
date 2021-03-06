const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()

const User = require('./models/user')

dotenv.config()

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to database')
    }
})

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// require apis
const productRoutes = require('./routes/product')
app.use('/api', productRoutes)

app.listen(7000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('listen 7000')
    }
})
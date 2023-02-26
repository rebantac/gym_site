const express = require('express')
const app = express()
const qr = require("qrcode");
const HttpError = require('./model/HttpError')
const user = require('./routes/userRoutes')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const gym = require('./routes/gymRoutes')
var cors = require('cors')

app.use(cors())

app.use(bodyparser.json())

app.use('/users',user)

app.use('/gyms',gym)

app.use((req, res, next) => {
    const error = new HttpError("Route not found nahi mila", 401)
    // return next(error)
    throw error
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }
    res.status(error.code || 400)
    res.json({ message: error.message || 'Route not found' })
})

mongoose.connect('mongodb://localhost:27017/diversion')
.then(()=>{
    console.log("connected")
    app.listen(5000,()=>{
        console.log("Listining on 5000")
    })
})
.catch(err=>{
    console.log(err)
})

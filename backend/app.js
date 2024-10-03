const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const cors = require('cors')
const compression = require("compression")

const router = require('./src/router/router')


require('dotenv').config()
//mongodb Database
require('./DB/connectMongoose')

app.use(cors())
app.use(express.json())
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', router)


server.listen(process.env.PORT, () => {
    console.log(`Listening to the port : ${process.env.PORT} : ${process.pid} `)
})

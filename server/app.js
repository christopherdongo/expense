const express = require('express')
const app = express()
const cors = require('cors')
const colors = require('colors')
const bodyParser = require('body-parser')

//load routes
const tracketRouter = require('./router/router')

//body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Acces-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

//router basic
app.use(cors())
app.use(tracketRouter)

module.exports = app











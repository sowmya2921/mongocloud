var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname+"/public"))
var courseRouter = require("./course.router")
app.use("/course",courseRouter)

app.listen(4000,()=>console.log('server is running on 4000'))
const express = require("express")
const mongoose =require("mongoose");
const app =express()
const route= require('./route/route')
const bodyParser=  require('body-parser')

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://shubhamsingh:7Q5S1ApAtvGYiNzT@cluster0.3t74x.mongodb.net/newTask?retryWrites=true&w=majority").then(()=>console.log("mogodb is connected"))
.catch(err=>console.log(err))

app.use("/",route);

app.listen(3000)
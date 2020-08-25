const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const jwt = require("jsonwebtoken")
require("dotenv/config")

const app = express()

const studentdetailroute = require("./router/studentdetail")
const studentpost = require("./router/studentpost")
const devroute = require('./router/developers/dev')
const routeradmin = require('./router/admins/rockybhai')


app.use(bodyparser.json())
app.use('/dev', devroute)
app.use('/students',studentdetailroute)
app.use('/hw',studentpost)
app.use('/admin', routeradmin)


app.get("/", (req,res) => {
    res.send("antenna workin")
})

const url = process.env.url


//const  connect  =  mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
//connect.then(db  =>  {
 //   console.log("connected to db")}

 mongoose.connect(url,{useNewUrlParser : true, useUnifiedTopology: true},() => {console.log("connected to db")})


const PORT = process.env.port || 4500

app.listen(PORT, () => {console.log(`antenna fixed on ${PORT}`)})
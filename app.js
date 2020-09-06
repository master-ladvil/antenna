const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const jwt = require("jsonwebtoken")
const cors = require("cors")
require("dotenv/config")

const app = express()

//test
//const testroute = require("./test/test")
const studentdetailroute = require("./router/studentdetail")
const studentpost = require("./router/studentpost")
const devroute = require('./router/developers/dev')
const routeradmin = require('./router/admins/rockybhai')
const adminpost = require("./router/admins/cases")

app.use(cors())
app.use(bodyparser.json())

app.use('/dev', devroute)
app.use('/students',studentdetailroute)
app.use('/hw',studentpost)
app.use('/admin', routeradmin)
app.use('/cases',adminpost)


app.get("/", (req,res) => {
    res.send("antenna workin")
})

const url = process.env.url




//const  connect  =  mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
//connect.then(db  =>  {
 //   console.log("connected to db")}

 mongoose.connect(url,{useNewUrlParser : true, useUnifiedTopology: true},() => {console.log("connected to db")})


 app.set('port', process.env.PORT || 4500)



 app.listen(app.get('port'), () => console.log('listening on port ' + app.get('port')))
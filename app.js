const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const jwt = require("jsonwebtoken")
require("dotenv/config")

const app = express()

//test
//const testroute = require("./test/test")
const studentdetailroute = require("./router/studentdetail")
const studentpost = require("./router/studentpost")
const devroute = require('./router/developers/dev')
const routeradmin = require('./router/admins/rockybhai')
const adminpost = require("./router/admins/cases")


app.use(bodyparser.json())
app.use((req,res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-requested-With, Content-Type, Accept, auth-token, Authorization"
    )
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT,POST, PATCH, DELETE,GET')
        return res.status(200).json({})
    }
})
app.use('/dev', devroute)
app.use('/students',studentdetailroute)
app.use('/hw',studentpost)
app.use('/admin', routeradmin)
app.use('/cases',adminpost)

//test
//app.use('/test', testroute)


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
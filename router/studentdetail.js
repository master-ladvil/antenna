const router = require("express").Router()
const mongoose = require("mongoose")
const studmod = require("../models/studentdetails")
const jwt = require("jsonwebtoken")
const devverify = require("./verification/devverify")

router.get('/signup',devverify, async (req,res) => {
    const students = await studmod.find()
    res.json(students)
})

router.post('/signup',  async (req,res) => {
    const newstud = new studmod({
        studentName : req.body.studentName,
        mobileNumber : req.body.mobileNumber,
        rollNo : req.body.rollNo,
        email : req.body.email,
        password : req.body.password
    })
    try{
    const upstud = await newstud.save()
    res.json(newstud)
    }catch(err){res.json({message : err})}
})

router.post('/login',   async (req,res) => {
    const checkauth = await studmod.findOne({"mobileNumber" : req.body.mobileNumber})
    
    if (req.body.password !== checkauth.password){
        return res.json({antenna : "shit yar hands"})
    }
    const response = {
        studentName : checkauth.studentName,
        email : checkauth.email,
        status : "login Succe5fu!!"
    }
// create and assign tokens
   const token = jwt.sign({_id : checkauth._id}, process.env.SECRET_TOKEN)
   res.header("auth-token", token).json(response)
   
})


module.exports = router
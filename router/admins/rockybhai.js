const router = require("express").Router()
const adminmod = require("../../models/admins/rockhardmodel")
const devverify = require("../verification/devverify")
const jwt = require("jsonwebtoken")
const adminverify = require("../verification/adminverify")

router.get('/signup', devverify, async (req,res) => {
    const devs = await adminmod.find()
    res.json(devs)
})

router.post('/signup' , async (req,res) => {
    const newdev = new adminmod ({
        adminName: req.body.adminName,
        email : req.body.email,
        password : req.body.password
    })
    try{
        const updev = await newdev.save()
        res.json(updev)
    }catch(err){res.json({message:err})}
})

router.post('/login', async (req,res) => {
    
    const checkauth = await adminmod.findOne({"email" : req.body.email})
    
    
    if (req.body.password !== checkauth.password){
        return res.json({antenna : "shit yar hands"})
    }
    
// create and assign tokens
   const token = jwt.sign({_id : checkauth._id}, process.env.SECRET_TOKEN_ROCK)
   res.header("auth-token", token).send(token)
   
})


module.exports = router
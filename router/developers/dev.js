const router = require("express").Router()
const devmod = require("../../models/developers/devschema")
const jwt = require("jsonwebtoken")
const verify = require('../verification/devverify')

router.get('/signup', verify,async (req,res) => {
    const devs = await devmod.find()
    res.json(devs)
})

router.post('/signup' , async (req,res) => {
    const newdev = new devmod ({
        devName: req.body.devName,
        email : req.body.email,
        password : req.body.password
    })
    try{
        const updev = await newdev.save()
        res.json(updev)
    }catch(err){res.json({message:err})}
})

router.post('/login', async (req,res) => {
    
    const checkauth = await devmod.findOne({"email" : req.body.email})
    
    
    if (req.body.password !== checkauth.password){
        return res.json({antenna : "shit yar hands"})
    }
    
// create and assign tokens
   const token = jwt.sign({_id : checkauth._id}, process.env.SECRET_TOKEN_DEV)
   res.header("auth-token", token).send(token)
   
})

module.exports = router
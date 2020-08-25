const router = require("express").Router()

const mongoose = require("mongoose")
const postmod = require("../models/studentpost")
const verify = require('./verification/studverify')
const rockverify = require('./verification/adminverify')
const { findOne } = require("../models/studentpost")

router.get("/", rockverify, async (req,res) => {
    const hw = await postmod.find()
    res.json(hw)
})

router.get('/:studentName',  async(req,res) => {
    const findonestud = await postmod.findOne({studentName : req.params.studentName})
    res.json(findonestud)
})

router.post('/', verify, async(req,res) => {
    const newhw = new postmod({
        studentName: req.body.studentName,
        caseStudy : req.body.caseStudy,
        straightness : req.body.straightness,
        fileLink : req.body.fileLink
    })
    try{
    const uphw = await newhw.save()
    res.json(uphw)
}catch(err){res.json({message:err})}
})

router.patch('/patch/:studentName',verify, async (req,res) => {
    try{
        const patcheddet = await postmod.updateOne({studentName : req.params.studentName }, 
        {$set : {straight : req.body.straightness,
        fileLink: req.body.fileLink}
        
    })
    res.json(patcheddet)
}catch(err){
    res.json({
        message : err
    })
}
})

module.exports = router
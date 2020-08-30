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

router.get('/specific/:rollNo',  async(req,res) => {
    const findonestud = await postmod.findOne({rollNo : req.params.rollNo,studentName : req.body.studentName, caseStudy:req.body.caseStudy})
    res.json(findonestud)
})

router.get('/:rollNo',  async(req,res) => {
    const findonestud = await postmod.find({rollNo : req.params.rollNo,studentName : req.body.studentName})
    res.json(findonestud)
})

router.post('/', verify, async(req,res) => {
    const newhw = new postmod({
        studentName: req.body.studentName,
        caseStudy : req.body.caseStudy,
        rollNo : req.body.rollNo,
        straightness : req.body.straightness,
        fileLink : req.body.fileLink
    })
    try{
    const uphw = await newhw.save()
    res.json(uphw)
}catch(err){res.json({message:err})}
})

router.patch('/patch/:rollNo',verify, async (req,res) => {
    try{
        const patcheddet = await postmod.updateOne({rollNo : req.params.rollNo,caseStudy : req.body.caseStudy }, 
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

//get a specific student using case study
router.get("/case/:rollNo", async (req,res) =>{
    try{
    const findhw = await postmod.findOne({
    rollNo: req.params.rollNo,
    caseStudy : req.body.caseStudy})
    
    res.json(findhw)
    }catch(err){res.json({ message: err})}
})

module.exports = router
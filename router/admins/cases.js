const router = require("express").Router()
const mongoose = require("mongoose")
const casemod = require("../../models/admins/rockypost")

router.get("/", async (req,res) => {
    try{
    const getcases = await casemod.find()
        res.json(getcases)
    }catch(err){res.json({message : err})}
})

router.post("/", async(req,res)=>{
    const postcases = new casemod({
        caseStudytitle : req.body.caseStudytitle,
        fileLink : req.body.fileLink,
        dueDate : req.body.dueDate
    })
    try{
    const upcases = await postcases.save()
    res.json(upcases)
    }catch(err){res.json({message:err})}
})

module.exports = router
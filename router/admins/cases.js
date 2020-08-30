const router = require("express").Router()
const mongoose = require("mongoose")
const casemod = require("../../models/admins/rockypost")

router.get("/", (req,res) => {
    res.send("homeWorks")
})

router.post("/", async(req,res)=>{
    const postcases = new casemod({
        caseStudytitle : req.body.caseStudytitle,
        fileLink : req.body.fileLink,
        dueDate : req.body.dueDate
    })
    try{
    const upcases = await casemod.save()
    res.json(upcases)
    }catch(err){res.json({message:err})}
})

module.exports = router
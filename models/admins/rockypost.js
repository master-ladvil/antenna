const mongoose = require("mongoose")

const adminCaseschema = mongoose.Schema({
    
    caseStudytitle : {
        type: String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    fileLink : {
        type : String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    dueDate : {
        type: Date,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    }
})

module.exports  = mongoose.model("admincases", adminCaseschema)
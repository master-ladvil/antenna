const mongoose = require("mongoose")

const studentDetailschema = mongoose.Schema({
    studentName : {
        type: String,
        required : true
    },

    mobileNumber : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type : String,
        required : true
    }
})

module.exports  = mongoose.model("students", studentDetailschema)
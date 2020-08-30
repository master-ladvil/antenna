const mongoose = require("mongoose")

const studentDetailschema = mongoose.Schema({
    studentName : {
        type: String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },

    mobileNumber : {
        type: Number,
        required: true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    email : {
        type: String,
        required: true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    password : {
        type : String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    }
})

module.exports  = mongoose.model("students", studentDetailschema)
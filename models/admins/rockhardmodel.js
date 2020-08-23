const mongoose = require("mongoose")

const adminDetailschema = mongoose.Schema({
    adminName : {
        type: String,
        required : true
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

module.exports  = mongoose.model("admin", adminDetailschema)
const mongoose = require("mongoose")

const adminDetailschema = mongoose.Schema({
    adminName : {
        type: String,
        required : true,
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

module.exports  = mongoose.model("admin", adminDetailschema)
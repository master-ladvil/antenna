const mongoose = require("mongoose")

const devDetailschema = mongoose.Schema({
    devName : {
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

module.exports  = mongoose.model("dev", devDetailschema)
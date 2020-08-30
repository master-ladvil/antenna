const mongoose = require("mongoose")

const studentPostschema = mongoose.Schema({
    studentName : {
        type: String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },

    caseStudy : {
        type: String,
        default : "1",
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    rollNo : {
        type: String,
        required: true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    straightness : {
        type: String,
        default : "false",
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    fileLink : {
        type : String,
        default : "not yet submitted",
        validate : [{validator: value => value, msg: 'Invalid name'}]
    }
})

module.exports  = mongoose.model("studentshw", studentPostschema)
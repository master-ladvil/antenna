const mongoose = require("mongoose")

const studentPostschema = mongoose.Schema({
    studentName : {
        type: String,
        required : true
    },

    caseStudy : {
        type: Number,
        default : 1
    },
    straightness : {
        type: String,
        default : "false"
    },
    fileLink : {
        type : String,
        default : "not yet submitted"
    }
})

module.exports  = mongoose.model("studentshw", studentPostschema)
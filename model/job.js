const mongoose = require("mongoose");

const jobSchema ={
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{

        type:Number,
        required:true,
        default:0
    },
    active:{
        type:Boolean,
        required:true,
        default:true
    }
};
const jobModel= mongoose.model("jobs",jobSchema);
module.exports = jobModel;
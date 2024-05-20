import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

let toDo=mongoose.model("toDo",todoSchema)

export default toDo;
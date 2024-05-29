import { Schema,model } from "mongoose";
import bcrypt from 'bcryptjs';

let userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required Field"],
        minLength:[4,"Name should have at least 4 characters"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required Field"],
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is required Field"],
        minLength:[8,"Password should have at least 8 characters"],
        trim:true
    },
    confirmPassword:{
        type:String,
        validate:{
            validator:function(value) {
                return this.password === value;
            },
            message:"Password and Confirm Password must be same...!"
        },
        select: false
    },
},{
    timestamps:true
})
 
//pre hook --before saving the document
userSchema.pre("save", async function(next){
    let salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

let User=model("User",userSchema)

export default User;
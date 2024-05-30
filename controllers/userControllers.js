import User from "../models/User.js"
import { genToken } from "../utils/genToken.js";

export const register=async (req,res,next)=>{
    try {
        const {name,email,password,confirmPassword}=req.body;

        let existingUser=await User.findOne({email})

        if(existingUser){
            return res.status(400).json({
                msg:"Email exists already,Try to Login!"
            })
        }
        let newUser=await User.create({ 
            name, email, password, confirmPassword
        })
        let token=await genToken(newUser._id)
        res.status(201).json({
            newUser, token
        })
        
    } catch (error) {
        res.status(400).json({
            msg:error.msg
        })
    }
}

export const login=async (req,res)=>{
    try {
      const {email,password}=req.body;
      let existingUser=await User.findOne({email})
      if(!existingUser || !(await existingUser.verifyPassword(password,existingUser.password))){
        return res.status(400).json({
            msg:"Username and password do not match"
        })
      }
      let token=await genToken(existingUser._id)
      res.status(200).json({
        existingUser,
        token
      }) 
    } catch (error) {
        res.status(400).json({
            msg:error.msg
        })
    }
}
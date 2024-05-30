import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const auth=async (req,res,next)=>{
    try {
        let token=req.headers?.authorization?.split(" ")[1]
        if(!token){
            return res.status(401).json({
                msg:"You're not logged in!"
            })
        }
        let decodedToken=await jwt.verify(token,"SecretKey")
        let existingUser=await User.findById(decodedToken.id)
        if(!existingUser){
            return res.status(401).json({
                msg:"User doesn't exist with this id"
            })  
        }
        req.user=existingUser._id
        next()
    } catch (error) {
        res.status(400).json({
            msg:error.msg
        })  
}
}
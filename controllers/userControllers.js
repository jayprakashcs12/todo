import User from "../models/User";

export const register = async (req, res, next) => {

    try {
        
        const { name, email, password, confirmPassword } = req.body;

        let existingUser = await User.findOne({email})

        if(existingUser) {
            return res.status(400).json({
                message: "e-Mail exits already, try to login...!"
            })
        }

        let newUser = await User.create({
            name, email, password, confirmPassword
        })

        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({
            message:err.message
        })
    }
}
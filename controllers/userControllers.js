import User from "../models/User.js";
import { genToken } from "../utils/genToken.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res, next) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }

        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "e-Mail exists already, try to login...!" });
        }

        // Hash the password before saving it
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let newUser = await User.create({
            name, email, password: hashedPassword
        });

        let token = await genToken(newUser._id);

        res.status(201).json({ newUser, token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const login = async (req, res)  => {
    try {
        const { email, password } = req.body;
        let existingUser = await User.findOne({email})
        if (!existingUser || !(await existingUser.verifyPassword(password, existingUser.password))) {
            return res.status(400).json({
                msg:"Username and password do not match...!"
            })
        }
        let token = await genToken(existingUser._id)
        res.status(200).json({ existingUser, token })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
import {Router} from 'express'
import { login, register } from '../controllers/userControllers.js';
let userRouter=Router()

userRouter.post("/register",register);
userRouter.post("/login",login);

export default userRouter;
import {Router} from 'express'
import { getLoginForm, getRegisterForm, login, register } from '../controllers/userControllers.js';

let userRouter=Router()

//http://localhost:5000/api/v1/user/register
userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get("/register",getRegisterForm)
userRouter.get("/login",getLoginForm)


export default userRouter;
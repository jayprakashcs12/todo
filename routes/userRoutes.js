import {Router} from 'express'
import { login, register } from '../controllers/userControllers.js';

let userRouter=Router()

//http://localhost:5000/api/v1/user/register
userRouter.post("/register",register)
userRouter.post("/login",login)


export default userRouter;
import express from 'express'
import { deleteTodo, getTodo, getTodos, postTodo, updateTodo } from '../controllers/toDoControllers.js'
//router instance--to have routes
let todoRouter=express.Router()

//router level middleware
// todoRouter.use()

todoRouter.post("/",postTodo)
todoRouter.get("/",getTodos)
todoRouter.get("/:id",getTodo)
todoRouter.put("/:id",updateTodo)
todoRouter.delete("/:id",deleteTodo)


export default todoRouter;
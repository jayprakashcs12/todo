import express from 'express';
import { deleteTodo, getTodo, getTodos, postTodo, updateTodo } from "../controllers/toDoControllers.js";
//router instance--to have routes
let toDoRouter = express.Router()

//router level middleware
// todoRouter.use()

toDoRouter.post('/api/v1/toDo', postTodo);
toDoRouter.get('/api/v1/toDo', getTodos);
toDoRouter.get('/api/v1/toDo/:id', getTodo);
toDoRouter.put('/api/v1/toDo/:id', updateTodo);
toDoRouter.delete('/api/v1/toDo/:id', deleteTodo);

export default toDoRouter;
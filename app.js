import express from 'express'; 
import { db } from './config/db.js';
import Todo from './models/Todo.js';

db()

let app = express();

//@Create a Todo
//@POST
//@Path -- /api/v1/todo
app.post('/api/v1/todo', async (req, res) => {
    res.send("created a todo")
})

//@Get all Todos
//@GET
//@Path -- /api/v1/todo/
app.get('/api/v1/todo', async (req, res) => {
    res.send("fetched all todos")
})

//@Get a Todo
//@GET
//@Path -- /api/v1/todo/:id
app.get('/api/v1/todo/:id', async (req, res) => {
    res.send("fetched a todo")
})

//@Update a Todo
//@PUT
//@Path -- /api/v1/todo/:id
app.put('/api/v1/todo/:id', async (req, res) => {
    res.send("update a todo")
})

//@Deleted a Todo
//@DELETE
//@Path -- /api/v1/todo/:id
app.delete('/api/v1/todo/:id', async (req, res) => {
    res.send("deleted a todo")
})

export default app;
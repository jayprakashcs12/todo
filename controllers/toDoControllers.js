import Todo from "../models/Todo.js"

//@Create a Todo
//@POST
//@path--/api/v1/todo
let postTodo = async (req, res, next) => {
    try {
        let todo = await Todo.create(req.body)
        res.status(201).json(todo)
    } catch (error) {
        let err = new Error(error.msg)
        err.status = 400;
        next(err);
    }
}

//@Get all Todos
//@GET
//@path--/api/v1/todo
let getTodos = async (req, res) => {
    try {
        let todos = await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        res.status(400).json({
            msg: error.msg
        })
    }
}


//@Get a Todo
//@GET
//@path--/api/v1/todo/:id
let getTodo = async (req, res) => {
    try {
        let id = req.params.id
        let todo = await Todo.findById(id)
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({
            msg: error.msg
        })
    }
}

//@Update a Todo
//@PUT
//@path--/api/v1/todo/:id
let updateTodo = async (req, res) => {
    try {
        let id = req.params.id
        let updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(400).json({
            msg: error.msg
        })
    }
}

//@Delete a Todo
//@DELETE
//@path--/api/v1/todo/:id
let deleteTodo = async (req, res) => {
    try {
        let id = req.params.id
        await Todo.findByIdAndDelete(id)
        res.status(200).json({
            msg: "doc deleted"
        })
    } catch (error) {
        res.status(400).json({
            msg: error.msg
        })
    }
}

export { postTodo, getTodos, getTodo, updateTodo, deleteTodo }
import toDo from "../models/toDo.js";

//@Create a toDo
//@POST
//@Path -- /api/v1/toDo/
let postTodo = async (req, res) => {
    try {
        let postTodo = await toDo.create(req.body)
        res.status(201).json(postTodo)
    } catch (err) {
        res.status(400).json({
            msg:err.msg
        })
    }
}


//@Get all toDos
//@GET
//@Path -- /api/v1/toDo/
let getTodos = async (req, res) => {
    try {
        let getTodos = await toDo.find()
        res.status(201).json(getTodos)
    } catch (err) {
        res.status(400).json({
            msg:err.msg
        })
    }
}

//@Get a toDo
//@GET
//@Path -- /api/v1/toDo/:id
let getTodo = async (req, res) => {
    try {
        let id = req.params.id
        let getTodo = await toDo.findById(id)
        res.status(200).json({getTodo})
    } catch (err) {
        res.status(400).json({
            msg:err.msg
        })
    }
}

//@Update a toDo
//@PUT
//@Path -- /api/v1/toDo/:id
let updateTodo = async (req, res) => {
    try {
        let id = req.params.id
        let updateTodo = await toDo.findByIdAndUpdate(id.req.body, {new:true})
        res.status(200).json({updateTodo})
    } catch (err) {
        res.status(400).json({
            msg:err.msg
        })
    }
}

//@Deleted a toDo
//@DELETE
//@Path -- /api/v1/toDo/:id
let deleteTodo = async (req, res) => {
    try {
        let id = req.params.id
        await toDo.findByIdAndDelete(id)
        res.status(200).json({
            msg:"Document Deleted Successfully...!"
        })
    } catch (err) {
        res.status(400).json({
            msg:err.msg
        })
    }
}

export { postTodo, getTodos, getTodo, updateTodo, deleteTodo };
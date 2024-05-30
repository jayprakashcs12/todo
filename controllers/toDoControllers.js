import Todo from "../models/Todo.js"


//@Create a Todo
//@POST
//@path--/api/v1/todo
let postTodo=async (req,res,next)=>{
    try {
     let todo=await Todo.create(req.body)
     res.status(201).json(todo)
    } catch (error) {
    //  res.status(400).json({
    //      message:error.message
    //  })
    let err=new Error(error.message)
    err.status=400;
    next(err);
    }
 }

//@Get all Todos
//@GET
//@path--/api/v1/todo
 let getTodos=async (req,res)=>{
    try {
        let todos=await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        res.status(400).json({
            message:error.message
        }) 
    }
}


//@Get a Todo
//@GET
//@path--/api/v1/todo/:id
let getTodo=async (req,res)=>{
    try {
     let id=req.params.id
     let todo=await Todo.findById(id)
     res.status(200).json(todo)
    } catch (error) {
     res.status(400).json({
         message:error.message
     }) 
    }
}


//@Update a Todo
//@PUT
//@path--/api/v1/todo/:id
let updateTodo=async (req,res)=>{
    try {
        let id=req.params.id
        let updatedTodo=await Todo.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedTodo)
       } catch (error) {
        res.status(400).json({
            message:error.message
        })  
       }
}

//@Delete a Todo
//@DELETE
//@path--/api/v1/todo/:id
let deleteTodo=async (req,res)=>{
    try {
        let id=req.params.id
        await Todo.findByIdAndDelete(id)
        res.status(200).json({
            message:"doc deleted"
        })
       } catch (error) {
        res.status(400).json({
            message:error.message
        }) 
       }
}

export {
    postTodo,getTodos,getTodo,updateTodo,deleteTodo
}
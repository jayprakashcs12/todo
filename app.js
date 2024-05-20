import express from 'express'
import {db} from './config/db.js'
db()
import todoRouter from './routes/toDoRoutes.js'
let app=express()

//register the template engine
app.set("view engine","ejs")
// app.set("views","./views")

app.use(express.json())
// app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("home",{
        name:'Jay Prakash Singh'
    })
})

//base route
app.use("/api/v1/todo",todoRouter)

export default app;
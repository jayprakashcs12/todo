import express from 'express'
import {db} from './config/db.js'
import todoRouter from './routes/toDoRoutes.js'
db()
let app=express()

//register the template engine
app.set("view engine","ejs")
// app.set("views","./views")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(express.static("public"))

//base route
app.use("/api/v1/todo",todoRouter)

export default app;
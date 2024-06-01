import express from 'express'
import {db} from './config/db.js'
import cookieParser from 'cookie-parser'
import methodOverride from 'method-override'
db()
import todoRouter from './routes/todoRoutes.js'
import userRouter from './routes/userRoutes.js'
let app=express()

//register the template engine
app.set("view engine","ejs")

app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//to serve static files
app.use(express.static("public"))


//base route
app.use("/api/v1/todo",todoRouter)
app.use("/api/v1/user",userRouter)


//cookies
app.get("/set-cookie",(req,res)=>{
    res.cookie("secret","123456",{
        httpOnly:true,
        maxAge:24*60*60*1000
    })
    res.send("cookie set")
})

app.get("/get-cookie",(req,res)=>{
    res.send(req.cookies.secret)
})

app.get("/update-cookie",(req,res)=>{
    res.cookie("secret","23456",{
        httpOnly:true,
        maxAge:24*60*60*1000
    })
    res.send("cookie updated")
})

app.get("/delete-cookie",(req,res)=>{
    // res.cookie("secret","",{
    //     maxAge:5
    // })
    res.clearCookie("secret")
    res.send("cookie deleted")
})



export default app;
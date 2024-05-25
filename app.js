import express from "express";
import { db } from "./config/db.js";
db();
import todoRouter from "./routes/todoRoutes.js";
import methodOverride from "method-override"
let app = express();

//register the template engine
app.set("view engine", "ejs"); 
// app.set("views","./views")

app.use(express.urlencoded({ extended: true }));
//The express.urlencoded() function is a built-in middleware function in Express.
//It parses incoming requests with URL-encoded payloads and is based on a body parser.

app.use(express.json());
//The express.json() function is a built-in middleware function in Express.
//parses incoming requests with JSON payloads and is based on body-parser.


//to serve static page
app.use(express.static("public"))

//
app.use(methodOverride('_method'))

//base route
app.use("/api/v1/todo", todoRouter);

export default app;
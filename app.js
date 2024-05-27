import express from "express";
import { db } from "./config/db.js";
db();
import todoRouter from "./routes/todoRoutes.js";
import userRouter from "./routes/userRoutes.js";
let app = express();

app.use(express.json())

//base route
app.use("/api/v1/todo", todoRouter);
app.use("/api/v1/user", userRouter);

export default app;
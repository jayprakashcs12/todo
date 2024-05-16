import mongoose from "mongoose";

export async function db() {
    try {
        let dataBase = await mongoose.connect('mongodb://127.0.0.1/TodoDB');
        console.log(`db is connected on ${dataBase.connection.host}`);
    } catch(error) {
        console.log(error.message);
    }
}
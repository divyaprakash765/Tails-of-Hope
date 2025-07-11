import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/DB.js";

dotenv.config({});
const app = express();
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on ${PORT}`);
})
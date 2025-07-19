import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/DB.js";
import userRoute from "./routes/userRoutes.js";
import communityRoute from "./routes/communityRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config({});
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/v1/user",userRoute);
app.use("/api/v1/community", communityRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on ${PORT}`);
})
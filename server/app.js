const express = require('express')
const app=express();
const dotenv= require('dotenv')
const db= require('./config/db')
const cookieParser= require("cookie-parser")
const cors= require("cors")
app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
db.database();
const userroutes= require("./route/auth")
dotenv.config();
app.use(express.json());

app.use("/api/v1/auth",userroutes);
app.get("/",(req,res)=>{
    res.send("Backend is started for netflix clone")
})
app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is started on port number ${process.env.PORT}`)
})
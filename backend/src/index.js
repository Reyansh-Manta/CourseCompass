import express from "express"
import { app } from "./app.js"
import connectDB from "./db/index.js"

connectDB()
.then(()=>{
    app.on("error",(e)=>{
        console.log("App connection error", e);
        throw e
    })
    app.listen(process.env.PORT || 7000 ,()=>{
        console.log(`App listening on port ${process.env.PORT}`);    
    })
})
.catch((err)=>{
    console.log("error while connection to app");
})
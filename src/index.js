

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import expres from "express"
// const app = expres()
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
//         app.listen("error",()=>{
//             console.log("Error :", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR : " , error )
//         throw error

//     }
// })()
// require('dotenv').config({path: "./env"})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
console.log("Loaded URI:", process.env.MONGODB_URI);
dotenv.config({
    path : "./env"
})

connectDB()

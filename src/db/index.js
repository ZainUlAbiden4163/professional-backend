import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

export const connectDB = async function () {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("ERROR : MONOGO DB CONNECTION ERROR" , error )
        process.exit(1)
    }
    
}

export default connectDB;
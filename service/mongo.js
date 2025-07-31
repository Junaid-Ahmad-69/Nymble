import mongoose from "mongoose";

export async function dbConnect(){
    try{
        const connect = await mongoose.connect(String(`${process.env.MONGODB_CONNECTIONS_STRING}`))
        console.log('DB CONNECTED SUCESSFULLY!')
        return connect
    }
    catch (e){
        console.log(e)
    }
}
dbConnect()
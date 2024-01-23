import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1/pizza";


const connection =  mongoose.connect(uri); //kobler til hele mongo-systemet

export default connection;
import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1/pizza";
const connection = mongoose.connect(uri); //connect to the mongodb-system

export default connection;

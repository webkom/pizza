import mongoose from "mongoose";

const uri = process.env.MONGODB_URL;
const connection = mongoose.connect(uri); //connect to the mongodb-system

export default connection;

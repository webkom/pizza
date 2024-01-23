import users from "../models/users";
import mongoose from "mongoose";

export default async function handler(req:any, res:any) {
    await mongoose;

    const {name, userName} = req.body;
    const person = new users({
        name:name,
        userName: userName

    })
    await person.save();
    console.log("inside api", name, userName);
    res.status(200).json({done: true})
    
}
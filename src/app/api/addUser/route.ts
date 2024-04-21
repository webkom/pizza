import { NextResponse } from "next/server";
import users from "../models/users";
import dbConnect from "../../../mongoose";
export async function POST(req: any) {
  await dbConnect();

  const { userName } = await req.json();
  const person = new users({
    userName: userName,
  });
  await person.save();
  return new NextResponse(JSON.stringify(person.userName));
}

import { NextResponse } from "next/server";
import users from "../models/users";
import connection from "../mongoose";
export async function POST(req: any) {
  await connection;

  const { userName } = await req.json();
  const person = new users({
    userName: userName,
  });
  await person.save();
  return new NextResponse(JSON.stringify(person.userName));
}

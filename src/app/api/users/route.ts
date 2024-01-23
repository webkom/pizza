import { NextRequest, NextResponse } from "next/server";
import connection from "../mongoose";
import User from "../models/users";

export async function GET(request: NextRequest) {

  await connection;
  await User.init();
  const users = await User.find({});
  console.log(users);

  return new NextResponse(JSON.stringify(users));
}

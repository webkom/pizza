import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../mongoose";
import User from "../models/users";

export async function GET(request: NextRequest) {
  await dbConnect();
  await User.init();
  const users = await User.findOne({
    userName: request.nextUrl.searchParams.get("UserName"),
  });
  return new NextResponse(JSON.stringify(users));
}

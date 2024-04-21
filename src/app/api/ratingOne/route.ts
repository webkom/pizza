import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../mongoose";
import Rating from "../models/rating";
import users from "../models/users";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
  await dbConnect();

  await users.init();
  const user = await users.findOne({
    userName: request.nextUrl.searchParams.get("userId"),
  });

  await Rating.init();
  const pizzaId = new ObjectId(
    request.nextUrl.searchParams.get("pizzaId") ?? "65a6db63f0278be56881a08d"
  );
  const userId = new ObjectId(user ?? "65afeb9376c9d28298f9af50");
  const rating = await Rating.findOne({ pizza: pizzaId, user: userId });

  return new NextResponse(JSON.stringify(rating));
}

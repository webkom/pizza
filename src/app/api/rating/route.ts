import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../mongoose";
import Rating from "../models/rating";
import users from "../models/users";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
  await dbConnect();
  await Rating.init();
  const ratings = await Rating.find();

  return new NextResponse(JSON.stringify(ratings));
}

export async function POST(req: any) {
  await dbConnect();
  const { rating, pizzaid, name } = await req.json();

  await users.init();
  const user = await users.findOne({ userName: name });

  await Rating.init();
  await Rating.findOneAndUpdate(
    {
      user: user.id,
      pizza: new ObjectId(pizzaid),
    },
    { rating: rating },
    { upsert: true }
  );
  return new NextResponse(JSON.stringify(rating));
}

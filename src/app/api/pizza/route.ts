import { NextRequest, NextResponse } from "next/server";
import connection from "../../../mongoose";
import Pizza from "../models/pizza";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
  await dbConnect();
  await Pizza.init();
  if (request.nextUrl.searchParams.get("pizzaId") == null) {
    const pizzas = await Pizza.find({});
    return new NextResponse(JSON.stringify(pizzas));
  } else {
    const pizza = await Pizza.findById(
      new ObjectId(
        request.nextUrl.searchParams.get("pizzaId") ??
          "65a6db63f0278be56881a08b"
      )
    );
    return new NextResponse(JSON.stringify(pizza));
  }
}

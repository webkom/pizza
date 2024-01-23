import { NextRequest, NextResponse } from "next/server";
import connection from "../mongoose";
import Pizza from "../models/pizza";




export async function GET(request: NextRequest) {

  await connection;
  await Pizza.init();
  const pizzas = await Pizza.find({});
  console.log(pizzas);

  return new NextResponse(JSON.stringify(pizzas));
}

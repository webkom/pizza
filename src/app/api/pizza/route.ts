import { NextRequest, NextResponse } from "next/server";
import connection from "../mongoose";
import Pizza from "../models/pizza";




export async function GET(request: NextRequest) {

  await connection;
  await Pizza.init();
  const pizzas = await Pizza.find({});



  return new NextResponse(JSON.stringify(pizzas));
}

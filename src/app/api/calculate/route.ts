import { NextResponse } from "next/server";
import dbConnect from "../../../mongoose";
import Pizza from "../models/pizza";
import User from "../models/users";
import Rating from "../models/rating";
import { ObjectId } from "mongodb";
import pizza from "../models/pizza";

export async function POST(req: any) {
  await dbConnect();

  console.log("Starter her");
  const { userList, pizzaConst, vegetar } = await req.json();
  const antallPersoner = userList.length;
  const antallPizza = Math.round(
    antallPersoner / Number.parseFloat(pizzaConst)
  );
  const antallVegetar = Math.min(antallPizza, vegetar);

  await Pizza.init();
  const pizzas_temp = await Pizza.find({});
  const pizzas = [];
  for (let pizza of pizzas_temp) {
    const new_data = {
      ...pizza._doc,
      rating: 0,
      numRatings: 0,
      finalRating: 0,
    };
    pizzas.push(new_data);
  }

  for (const user of userList) {
    const ratingList = await Rating.find({ user: new ObjectId(user.id) });
    for (const rating of ratingList) {
      const riktigPizza = pizzas.filter(
        (pizza) => pizza._id.toString() == rating.pizza.toString()
      )[0];
      riktigPizza.rating += rating.rating;
      riktigPizza.numRatings += 1;
    }
  }
  for (const pizza of pizzas) {
    pizza.finalRating = (pizza.rating / 5 + 1) / (pizza.numRatings + 2);
  }

  pizzas.sort((pizza1, pizza2) => pizza2.finalRating - pizza1.finalRating);
  console.log(pizzas);
  const returPizza = [];
  for (let i = 0; i < antallVegetar; i++) {
    returPizza.push(pizzas.filter((pizza) => pizza.veg != null)[i]);
  }
  for (let i = antallVegetar; i < antallPizza; i++) {
    returPizza.push(pizzas.filter((pizza) => pizza.veg == null)[i]);
  }

  return new NextResponse(JSON.stringify(returPizza));
}

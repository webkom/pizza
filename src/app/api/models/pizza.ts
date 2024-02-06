import { Schema, model, models, Document } from "mongoose";
import { PizzaType } from "@/app/types";

const pizzaSchema = new Schema(
  {
    name: String,
    price: Number,
    img: String,
    description: String,
    veg: Boolean,
  },
  { collection: "pizzas" }
);

export default models.Pizza ||
  model<PizzaType & Document>("Pizza", pizzaSchema);

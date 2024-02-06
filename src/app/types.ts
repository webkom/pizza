import type { Document } from "mongoose";

export interface PizzaType extends Document {

  name: string;
  price: number;
  img: string;
  description: string;
  veg: boolean;
}

export interface UserType extends Document {
  userName: string;
}

export interface RatingType extends Document {
  rating: number;
}

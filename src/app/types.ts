import type { Document } from "mongoose";

export interface PizzaType extends Document {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
}

export interface UserType extends Document {
  name: string;
  userName: string;
}

export interface RatingType extends Document {
  rating: number;
}

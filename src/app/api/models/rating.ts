import { Schema, model, models, Document } from "mongoose";
import { RatingType } from "@/app/types";
import { ObjectId } from "mongodb";

const ratingSchema = new Schema(
  {
    user: ObjectId,
    pizza: ObjectId,
    rating: Number,
  },
  { collection: "rating" }
);

export default models.Rating ||
  model<RatingType & Document>("Rating", ratingSchema);

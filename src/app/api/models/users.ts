import { Schema, model, models, Document } from "mongoose";
import { UserType } from "@/app/types";

const userSchema = new Schema(
  {
    name: String,
    userName: String,
  },
  { collection: "users" }
);

export default models.User || model<UserType & Document>("User", userSchema);

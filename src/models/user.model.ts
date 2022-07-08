import mongoose from "mongoose";
import { UserDocument } from "../types/user";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>("User", UserSchema);

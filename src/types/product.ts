import mongoose from "mongoose";

export interface PostDocument extends mongoose.Document {
  user: UserDocument["_id"];
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

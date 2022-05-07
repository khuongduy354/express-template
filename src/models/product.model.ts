import mongoose from "mongoose";
import { PostDocument } from "../types/";

const PostSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
      unique: true,
      default: () => null,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, default: true },
    body: { type: String, default: true },
  },
  { timestamps: true }
);

const Post = mongoose.model<PostDocument>("Post", PostSchema);

export default Post;

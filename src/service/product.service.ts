import { Request, Response } from "express";
import { Post } from "../models/product.model";
import { PostDocument } from "../types/product";

const createProduct = async (input: PostDocument) => {
  try {
    Post.create(input);
  } catch (e) {}
};
const getProduct = async () => {
  try {
  } catch (e) {}
};

const updateProduct = async () => {
  try {
    Post.findOne();
  } catch (e) {}
};
const deleteProduct = async () => {
  try {
  } catch (e) {}
};

export const ProductService = {
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
};

import { Application } from "express";
import express from "express";
import { ProductRouter } from "./product.route";
import { UserRouter } from "./user.route";
export const ConfigRoute = (app: Application) => {
  const router = express.Router();
  ProductRouter(router);
  UserRouter(router);
  app.use(router);
};

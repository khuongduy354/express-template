import { Application } from "express";
import ProductRouter from "./product.route";
import UserRouter from "./user.route";
export const ConfigRoute = (app: Application) => {
  app.use("/v1", ProductRouter);
  app.use("/v1", UserRouter);
};

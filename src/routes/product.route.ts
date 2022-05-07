import { Router } from "express";

export const ProductRouter = (router: Router) => {
  router.post("/product");
  router.get("/product/:id");
  router.put("/product/:id");
  router.delete("/product/:id");
};

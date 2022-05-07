import { Router } from "express";

export const UserRouter = (router: Router) => {
  router.post("/user");
  router.get("/user/:id");
  router.put("/user/:id");
};

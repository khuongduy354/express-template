//boostrap expressjs
import { rateLimit } from "express-rate-limit";
import { logger } from "./config/logger";
import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { AppError, errorHandler } from "./error";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

//testing routes
app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  logger.info("Server is running on port " + PORT.toString());
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res);
  if (!errorHandler.isTrustedError(err)) {
    process.exit(1);
  }
});

process.on("unhandledRejection", (reason: Error) => {
  throw reason;
});

process.on("uncaughtException", (error: Error) => {
  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});

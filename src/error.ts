import { Response } from "express";
import { logger } from "./config/logger";
export class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    //  if (err instanceof mongoose.Error.ValidationError) {
    //   statusCode = 400;
    //   message = err.message;
    // } else if (err instanceof mongoose.Error.DocumentNotFoundError) {
    //   statusCode = 404;
    //   message = err.message;
    // }
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

class ErrorHandler {
  public handleError(err: Error, res?: Response) {
    //constructing response
    let { message, stack } = err;
    let statusCode;
    if (err instanceof AppError) {
      statusCode = err.statusCode;
    } else {
      statusCode = 500;
      message = "Something went wrong";
    }

    //logging
    logger.error(message, stack);

    //response
    res && res.status(statusCode).json({ error: { message } });
  }

  public isTrustedError(error: Error): boolean {
    return error instanceof AppError ? true : false;
  }
}
export const errorHandler = new ErrorHandler();

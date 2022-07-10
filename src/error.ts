import { Response } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const errorHandler = (err: AppError, res: Response) => {
  const { statusCode, message, stack } = err;
  console.log(`${message} - ${stack}`); // logging
  res.status(statusCode).json({ error: { message } });
};

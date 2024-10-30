import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

export function handleHttpError(
  err: any,
  req: Request,
  res: any,
  next: NextFunction
): Response {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error: ${err.message}`,
  });
}

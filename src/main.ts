import "express-async-errors";
import "reflect-metadata";

import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request } from "express";
import helmet from "helmet";
import { router } from "./shared/infra/http/routes";

import "@shared/container";
import { handleHttpError } from "@shared/infra/http/middlewares/handleHttpError.middleware";

dotenv.config();

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(router);

app.use((err: any, req: Request, res: any, next: NextFunction) => {
  handleHttpError(err, req, res, next);
});

app.get("/", (req, res) => {
  res.send("Heart beat!");
});

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

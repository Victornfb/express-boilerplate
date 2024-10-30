import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use(authenticateRoutes);

export { router };

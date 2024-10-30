import { Router } from "express";

import { AuthenticateUserController } from "@modules/users/useCases/authenticateUser/AuthenticateUser.controller";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", async (req, res) => {
  await authenticateUserController.handle(req, res);
});

export { authenticateRoutes };

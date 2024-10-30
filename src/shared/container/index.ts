import { container } from "tsyringe";

import { UsersRepositoryProtocol } from "@modules/users/repositories/Users.protocol";
import { UsersRepository } from "@modules/users/repositories/Users.repository";

container.registerSingleton<UsersRepositoryProtocol>(
  "UsersRepository",
  UsersRepository
);

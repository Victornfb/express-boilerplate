import { ICreateUserDTO } from "@modules/users/dtos/ICreateUser.dto";
import { User } from "@prisma/client";

interface UsersRepositoryProtocol {
  create(data: ICreateUserDTO): Promise<Omit<User, "password">>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
  deleteById(id: number): Promise<void>;
}

export { UsersRepositoryProtocol };

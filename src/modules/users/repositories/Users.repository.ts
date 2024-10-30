import { ICreateUserDTO } from "@modules/users/dtos/ICreateUser.dto";
import { UsersRepositoryProtocol } from "@modules/users/repositories/Users.protocol";
import { PrismaClient, User } from "@prisma/client";

class UsersRepository implements UsersRepositoryProtocol {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({
    id,
    name,
    password,
    email,
  }: ICreateUserDTO): Promise<Omit<User, "password">> {
    const user = await this.prisma.user.create({
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
      data: {
        id,
        name,
        password,
        email,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({});

    return users;
  }

  async deleteById(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

export { UsersRepository };

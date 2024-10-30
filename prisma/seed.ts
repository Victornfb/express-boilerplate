import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("admin", 10);

  await prisma.user.upsert({
    where: {
      email: "admin@boilerplate.com",
    },
    create: {
      name: "Admin",
      email: "admin@boilerplate.com",
      password,
    },
    update: {},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

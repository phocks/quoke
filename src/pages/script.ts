import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //   },
  // });

  // console.log(user);

  // const users = await prisma.user.findMany()
  // console.log(users)

  // await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //     posts: {
  //       create: { title: "Hello World" },
  //     },
  //     profile: {
  //       create: { bio: "I like turtles" },
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });

  console.dir(allUsers, { depth: null });
}

import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => {
  const id = params.id;
  console.log(params);

  const json = { message: "hello" };

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      // process.exit(1);
    });

  return new Response(JSON.stringify(json), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

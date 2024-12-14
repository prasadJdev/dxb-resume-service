import { PrismaClient } from "@prisma/client";
// Since the dev server re-requires the bundle, do some shenanigans to make
// certain things persist across that 😆

// Borrowed/modified from https://github.com/jenseng/abuse-the-platform/blob/2993a7e846c95ace693ce61626fa072174c8d9c7/app/utils/singleton.ts

export const singleton = <Value>(name: string, valueFactory: () => Value): Value => {
  const g = global as unknown as { __singletons: Record<string, unknown> };
  g.__singletons ??= {};
  g.__singletons[name] ??= valueFactory();
  return g.__singletons[name] as Value;
};

// Hard-code a unique key, so we can look up the client when this module gets re-imported
const prisma = singleton("prisma", () => new PrismaClient());
prisma.$connect();

console.log("Database connected successfully.");

export { prisma };

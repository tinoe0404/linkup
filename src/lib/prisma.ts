// src/lib/prisma.ts
import { PrismaClient } from '../generated/prisma';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ['query'], // optional: helps debug queries
  });

// Ensure we reuse the client during hot reloads in development
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;

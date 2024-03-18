import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().refine(
      (str) => !str.includes("YOUR_MYSQL_URL_HERE"),
      "You forgot to change the default URL"
    ),
    DB_AUTH_TOKEN: z.string(),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    NEXTAUTH_SECRET: z.string().optional(),
    NEXTAUTH_URL: z.string().url(),
    DISCORD_CLIENT_ID: z.string(), // Define the type for DISCORD_CLIENT_ID
    DISCORD_CLIENT_SECRET: z.string(), // Define the type for DISCORD_CLIENT_SECRET
  },
  client: {
    // Define client-side environment variables here if needed
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DB_AUTH_TOKEN: process.env.DB_AUTH_TOKEN,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID, // Include DISCORD_CLIENT_ID in runtimeEnv
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET, // Include DISCORD_CLIENT_SECRET in runtimeEnv
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});

import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

export default {
  databaseUrl: process.env.DATABASE_URL,
};

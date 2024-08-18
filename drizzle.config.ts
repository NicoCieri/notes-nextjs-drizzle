import "@/lib/config";
import { defineConfig } from "drizzle-kit";

// config({ path: '.env.local' });

export default defineConfig({
  schema: "./src/lib/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});

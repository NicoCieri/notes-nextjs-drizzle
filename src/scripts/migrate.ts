import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "@/lib/db";
import loadingAnimation from "@/lib/loadingAnimation";

async function main() {
  const stopLoading = loadingAnimation("Migrating");

  try {
    await migrate(db, { migrationsFolder: "./migrations" });
    stopLoading("Migration completed");
    process.exit(0);
  } catch (error) {
    stopLoading();
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

main();

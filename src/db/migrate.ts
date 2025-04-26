import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";


if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}

async function runMigrations() {
    try {
        const sql = neon(process.env.DATABASE_URL!);
        const db = drizzle(sql);

        await migrate(db, { migrationsFolder: "./drizzle" });
        console.log("Migrations complete");
    } catch (error) {
        console.error("Error running migrations:", error);
        process.exit(1);
    }
}

runMigrations();
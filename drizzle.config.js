// import "dotenv/config";
import { config } from 'dotenv';
config({ path: '.env' });
import { defineConfig } from "drizzle-kit";


export default defineConfig({
    schema: "./api/models/schema.js",
    // schema: "./api/models/userModel.js",
    out: "./drizzle",
    dialect: 'mysql',
    dbCredentials: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password:  process.env.DB_PASSWORD
    },
    driver: "mysql2"
})

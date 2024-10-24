import "dotenv/config";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./models/schema.js";




const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// DB Connection Test
connection.connect((error) => {
    if (error) {
        console.error('There Is Error In DB Connection:' + error);
    }
    
    console.log('DB Connected Succefully')
    
})

const db = drizzle(connection, 
    { 
        schema: schema, 
        mode: "default", 
        logger: true
    }
);



export { db };
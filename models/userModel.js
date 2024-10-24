import { 
    int,
    varchar,
    timestamp,
    mysqlTable,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';



export const usersTable = mysqlTable("users", {
    id: int("id", { length: 20 }).primaryKey().autoincrement(),
    username: varchar("user_name", { length: 50 }).unique().notNull(),
    password: varchar("password", { length: 100 }).notNull(),
    firstName: varchar("first_name", { length: 50 }).notNull(),
    lastName: varchar("last_name", { length: 50 }).notNull(),
    email: varchar("email", { length: 100 }).unique(),
    phone: varchar("phone", { length: 20 }).unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: 'date', fsp: 3}).notNull()
    .default(sql`CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)`)
});




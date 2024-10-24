import { 
    int,
    varchar,
    timestamp,
    mysqlTable,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';


export const clientsTable = mysqlTable("clients", {
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 255 }).notNull(),
    website: varchar("website", { length: 100 }).unique().notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: 'date', fsp: 3}).notNull()
    .default(sql`CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)`)
});

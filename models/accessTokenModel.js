import { 
    int,
    varchar,
    datetime,
    mysqlTable,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';
import { usersTable } from './userModel.js';


export const accessTokenTable = mysqlTable("user_tokens", {
    id: int("id", { length: 20 }).primaryKey().autoincrement(),
    userId: int("user_id", { length: 20 })
        .references(() => usersTable.id, { onDelete: "cascade", onUpdate: "cascade" })
        .notNull()
    ,
    token: varchar("token", { length: 255 }).notNull(),
    device_details: varchar("device_details", { length: 255 }).notNull(),
    last_used_at: datetime("last_used_at", { mode: 'date' }).default(sql`CURRENT_TIMESTAMP()`),
    expires_at: datetime("expires_at", { mode: 'date' }).notNull(),
    createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP()`).notNull(),
    updatedAt: datetime("updated_at", { mode: 'date' }).default(sql`CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()`)
});





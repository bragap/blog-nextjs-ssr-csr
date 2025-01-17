import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    age: int().notNull(),
    email: text().notNull().unique(),
});

export const postsTable = sqliteTable("posts_table", {
    id: int().primaryKey({ autoIncrement: true }),
    title: text().notNull(),
    content: text().notNull(),
    userId: int().notNull().references(() => usersTable.id, { onDelete: "cascade" }),
});
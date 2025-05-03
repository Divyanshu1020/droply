import { relations } from "drizzle-orm";
import { boolean, pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const files =  pgTable("files", {
    id: uuid("id").defaultRandom().primaryKey(),


    name: text("name").notNull(),
    path: text("path").notNull(),
    size: text("size").notNull(),
    type: text("type").notNull(),
    url: text("url").notNull(),
    thumnailUrl: text("thumnail_url"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),

    // Owner
    userId: text("user_id").notNull(),
    parentId: uuid("parent_id"), 

    isFolder: boolean("is_folder").default(false).notNull(),
    isStarred: boolean("is_starred").default(false).notNull(),
    isTrash: boolean("is_trash").default(false).notNull(),
});

export const filesRelations = relations(files, ({ one, many }) => ({
    parent: one(files, {
        fields: [files.parentId],
        references: [files.id],
    }),

    children: many(files),
}))

// Types
export const FILE = typeof files.$inferSelect
export const NEW_FILE = typeof files.$inferInsert
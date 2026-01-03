import { pgTable, text, timestamp, uuid, uniqueIndex, index } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { user } from "./auth-schema"

export const company = pgTable("company", {
    id: uuid("id").defaultRandom().primaryKey(),
    ownerUserId: text("owner_user_id")
        .notNull()
        .references(() => user.id, { onDelete : "cascade" }),

    name: text("name").notNull(),
    slug: text("slug").notNull(),
    description: text("description"),
    email: text("email").notNull(),
    phone: text("phone"),
    imageUrl: text("image_url"),
    
    timezone: text("timezone").notNull().default("Europe/Budapest"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().$onUpdate(() => new Date()).notNull(),

},
(table) => [
    uniqueIndex("company_owner_user_unique").on(table.ownerUserId),
    uniqueIndex("company_slug_unique").on(table.slug),
    index("company_owner_user_idx").on(table.ownerUserId)
    ]
);

export const companyRelations = relations(company, ({ one }) => ({
    owner: one(user, {
        fields: [company.ownerUserId],
        references: [user.id]
    }), 
}));
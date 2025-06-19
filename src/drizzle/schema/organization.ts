import {pgTable, varchar} from "drizzle-orm/pg-core";
import {createdAt, updatedAt, id} from "@/drizzle/schemaHelper";

export const OrganizationTable = pgTable("organizations", {
    id,
    name: varchar().notNull(),
    imageUrl: varchar(),
    createdAt,
    updatedAt
})
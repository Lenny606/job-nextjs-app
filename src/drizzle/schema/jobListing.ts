import {text, pgTable, integer, varchar, boolean, uuid} from "drizzle-orm/pg-core";
import {createdAt, updatedAt, id, wageIntervalEnum} from "@/drizzle/schemaHelper";
import {OrganizationTable} from "@/drizzle/schema/organization";


export const JobListingTable = pgTable("job_listings", {
    id,
    title: varchar().notNull(),
    description: text().notNull(),
    organizationId: uuid().references(() => OrganizationTable.id, {
        onDelete: "cascade"
    }).notNull(),
    wage: integer(),
    wageInterval: wageIntervalEnum(),
    stateAbbreviation: varchar(),
    city: varchar(),
    isFeatured: boolean().notNull().default(false),

    createdAt,
    updatedAt
})
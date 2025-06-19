import {pgEnum, pgTable, integer, varchar, boolean} from "drizzle-orm/pg-core";
import {createdAt, updatedAt, id} from "@/drizzle/schemaHelper";
import {OrganizationTable} from "@/drizzle/schema/organization";



export const JobListingTable = pgTable("job_listings", {
    id,
    title: varchar().notNull(),
    description: text().notNull(),
    organizationId: uuid().references(() => OrganizationTable.id, {
        onDelete: "CASCADE"
    }).notNull(),
    wage: integer(),
    wageInterval: wageIntervalEnum(),
    stateAbbreviation: varchar(),
    city: varchar(),
    isFeatured: boolean().notNull().default(false),

    createdAt,
    updatedAt
})
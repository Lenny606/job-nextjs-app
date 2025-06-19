import {pgTable, varchar} from "drizzle-orm/pg-core";
import {createdAt, updatedAt, id} from "@/drizzle/schemaHelper";
import {relations} from "drizzle-orm";
import {JobListingTable} from "@/drizzle/schema/jobListing";
import {OrganizationUserSettingsTable} from "@/drizzle/schema/organizationUserSettings";

export const OrganizationTable = pgTable("organizations", {
    id,
    name: varchar().notNull(),
    imageUrl: varchar(),
    createdAt,
    updatedAt
})

/**
 * Represents the relationships associated with an organization.
 *
 * This variable establishes the relations for the OrganizationTable,
 * defining the related tables and their corresponding relationships.
 *
 * Relations defined:
 * - jobListings: Establishes a "many-to-one" relationship with the JobListingTable.
 * - organizationUserSettings: Establishes a "many-to-one" relationship with the OrganizationUserSettingsTable.
 *
 * Used to model how an organization connects to related entities such as job listings
 * and user-specific settings associated with the organization.
 */
export const organizationRelations = relations(OrganizationTable,
    ({many}) => ({
        jobListings: many(JobListingTable),
        organizationUserSettings: many(OrganizationUserSettingsTable)
    })
)
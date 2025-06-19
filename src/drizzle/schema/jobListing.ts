import {text, pgTable, integer, varchar, boolean, uuid, timestamp, index} from "drizzle-orm/pg-core";
import {
    createdAt,
    updatedAt,
    id,
    wageIntervalEnum,
    locationRequirementEnum,
    statusEnum,
    experienceEnum, typeEnum
} from "@/drizzle/schemaHelper";
import {OrganizationTable} from "@/drizzle/schema/organization";
import {relations} from "drizzle-orm";
import {JobListingApplicationTable} from "@/drizzle/schema/jobListingApplication";


/**
 * Represents the structure of the "job_listings" table in the database.
 *
 * This table stores information about job listings including details such as title,
 * description, associated organization, wage, location, and other metadata.
 *
 * Fields:
 * - id: The primary identifier for a job listing.
 * - title: The title of the job listing. This is a required field.
 * - description: Detailed information about the job listing. This is a required field.
 * - organizationId: The associated organization for the job listing. This is required and references the "OrganizationTable" id, with cascade delete behavior.
 * - wage: The wage amount for the job listing, if specified.
 * - wageInterval: The frequency at which the wage is paid (e.g., hourly, daily).
 * - stateAbbreviation: The state abbreviation associated with the job's location.
 * - city: The city associated with the job's location.
 * - isFeatured: Indicates whether the job listing is featured. Defaults to false.
 * - locationRequirement: Specifies the location requirement (e.g., remote, on-site). This is a required field.
 * - status: The current status of the job listing (e.g., draft, published). Defaults to "draft".
 * - experience: Represents the experience level requirement for the job listing. This is a required field.
 * - type: The type or category of the job listing. This is a required field.
 * - published: The timestamp of when the job was published, includes timezone information.
 * - createdAt: The timestamp of when the job listing was created.
 * - updatedAt: The timestamp of the last update to the job listing.
 *
 * Indexes:
 * - An index is applied on the "stateAbbreviation" field.
 */
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
        locationRequirement: locationRequirementEnum().notNull(),
        status: statusEnum().notNull().default("draft"),
        experience: experienceEnum().notNull(),
        type: typeEnum().notNull(),
        published: timestamp({withTimezone: true}),
        createdAt,
        updatedAt
    },
    table => [index().on(table.stateAbbreviation)]
)

//relations
/**
 * Represents the relationships and references for the JobListingTable.
 *
 * This variable defines how the JobListingTable is related to other tables,
 * facilitating structured access to related data within the database schema.
 *
 * Relationships:
 * - `organization`: Establishes a one-to-one relationship with the OrganizationTable.
 *   Specifies the mapping fields and references between JobListingTable and OrganizationTable.
 * - `applications`: Defines a one-to-many relationship with the JobListingApplicationTable,
 *   representing all applications associated with a specific job listing.
 */
export const JobListingReferences = relations(JobListingTable, ({one, many}) => ({
    organization: one(OrganizationTable, {
        fields: [JobListingTable.organizationId],
        references: [OrganizationTable.id]
    }),
    applications: many(JobListingApplicationTable)
}))
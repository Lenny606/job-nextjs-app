import {
    text,
    pgTable,
    integer,
    uuid,
    primaryKey
} from "drizzle-orm/pg-core";
import {
    createdAt,
    updatedAt,
    id,
    applicationStageEnum
} from "@/drizzle/schemaHelper";
import {JobListingTable} from "@/drizzle/schema/jobListing";
import {UserTable} from "@/drizzle/schema/user";
import {relations} from "drizzle-orm";

export const JobListingApplicationTable = pgTable("job_listings_applications", {
        id,
        jobListingId: uuid().references(() => JobListingTable.id, {
            onDelete: "cascade"
        }).notNull(),
        userId: uuid().references(() => UserTable.id, {
            onDelete: "cascade"
        }).notNull(),
        coverLetter: text(),
        rating: integer(),
        stage: applicationStageEnum().notNull(),
        createdAt,
        updatedAt
    },
    table => [primaryKey({columns: [table.jobListingId, table.userId]})]
)

//relations
/**
 * Represents the relationships for the `JobListingApplicationTable` to other tables.
 *
 * @constant
 * @type {Object}
 *
 * @property {Object} user - Defines a one-to-one relationship between `JobListingApplicationTable`
 * and `UserTable` using the `userId` field in `JobListingApplicationTable`
 * and the `id` field in `UserTable`.
 *
 * @property {Object} jobListingId - Defines a one-to-one relationship between `JobListingApplicationTable`
 * and `JobListingTable` using the `jobListingId` field in `JobListingApplicationTable`
 * and the `id` field in `JobListingTable`.
 */
export const JobListingApplicationReferences = relations(JobListingApplicationTable, ({one}) => ({
    user: one(UserTable, {
        fields: [JobListingApplicationTable.userId],
        references: [UserTable.id]
    }),
    jobListingId: one(JobListingTable, {
        fields: [JobListingApplicationTable.jobListingId],
        references: [JobListingTable.id]
    })
}))
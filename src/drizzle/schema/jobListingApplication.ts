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
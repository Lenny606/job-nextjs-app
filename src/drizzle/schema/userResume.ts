import {
    pgTable,
    uuid,
    varchar
} from "drizzle-orm/pg-core";
import {
    createdAt,
    updatedAt,
    id
} from "@/drizzle/schemaHelper";
import {UserTable} from "@/drizzle/schema/user";
import {relations} from "drizzle-orm";

export const UserResumeTable = pgTable("user_resumes", {
        id,
        userId: uuid().references(() => UserTable.id, {
            onDelete: "cascade"
        }).notNull().primaryKey(),
        resumeFileUrl: varchar().notNull(),
        resumeFileKey: varchar().notNull(),
        aiSummary: varchar(),
        createdAt,
        updatedAt
    }
)

export const userResumeRelations = relations(UserResumeTable, ({one}) => ({

    user: one(UserTable, {
        fields: [UserResumeTable.userId],
        references: [UserTable.id]
    }),
}))
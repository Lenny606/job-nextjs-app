import {
    pgTable,
    integer,
    uuid,
    primaryKey, boolean
} from "drizzle-orm/pg-core";
import {
    createdAt,
    updatedAt,
    id
} from "@/drizzle/schemaHelper";
import {UserTable} from "@/drizzle/schema/user";
import {OrganizationTable} from "@/drizzle/schema/organization";

export const OrganizationUserSettingsTable = pgTable("organization_user_settings", {
        id,
        userId: uuid().references(() => UserTable.id, {
            onDelete: "cascade"
        }).notNull(),
        organizationId: uuid().references(() => OrganizationTable.id, {
            onDelete: "cascade"
        }).notNull(),
        newApplicationEmailNotification: boolean().notNull().default(false),
        minimumRating: integer(),
        createdAt,
        updatedAt
    },
    table => [primaryKey({columns: [table.organizationId, table.userId]})]
)
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
import {relations} from "drizzle-orm";

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
//relations
/**
 * Defines the relationships for the OrganizationUserSettingsTable.
 *
 * This variable establishes the relations between OrganizationUserSettingsTable
 * and other database tables to represent associations with users and organizations.
 *
 * Relationships:
 * - `user`: Represents a one-to-one relationship with the UserTable. The relationship
 *   is established using the `userId` field in OrganizationUserSettingsTable, which
 *   references the `id` field in UserTable.
 * - `organization`: Represents a one-to-one relationship with the OrganizationTable.
 *   The relationship is established using the `organizationId` field in
 *   OrganizationUserSettingsTable, which references the `id` field in OrganizationTable.
 */
export const OrganizationUserSettingRelations = relations(OrganizationUserSettingsTable, ({one}) => ({
    user: one(UserTable, {
        fields: [OrganizationUserSettingsTable.userId],
        references: [UserTable.id]
    }),
    organization: one(OrganizationTable, {
        fields: [OrganizationUserSettingsTable.organizationId],
        references: [OrganizationTable.id]
    })
}))
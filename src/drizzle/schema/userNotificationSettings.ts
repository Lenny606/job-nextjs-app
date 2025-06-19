import {
    pgTable,
    uuid,
    boolean, varchar
} from "drizzle-orm/pg-core";
import {
    createdAt,
    updatedAt,
    id
} from "@/drizzle/schemaHelper";
import {UserTable} from "@/drizzle/schema/user";
import {relations} from "drizzle-orm";
import {UserResumeTable} from "@/drizzle/schema/userResume";
import {OrganizationUserSettingsTable} from "@/drizzle/schema/organizationUserSettings";

export const UserNotificationSettingsTable = pgTable("user_notification_settings", {
        id,
        userId: uuid().references(() => UserTable.id, {
            onDelete: "cascade"
        }).notNull().primaryKey(),
        newJobEmailNotification: boolean().notNull().default(false),
        aiPrompt: varchar(),
        createdAt,
        updatedAt
    }
)

export const userNotificationSettingsRelations = relations(UserNotificationSettingsTable, ({one}) => ({

    user: one(UserTable, {
        fields: [UserNotificationSettingsTable.userId],
        references: [UserTable.id]
    }),
}))
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
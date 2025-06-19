import {pgEnum, timestamp, uuid} from "drizzle-orm/pg-core";

export const createdAt = timestamp({
    withTimezone: true,
}).notNull().defaultNow()

export const updatedAt = timestamp({
    withTimezone: true,
}).notNull().defaultNow().$onUpdate(() => new Date())

export const id = uuid().primaryKey().defaultRandom()


// ------------- ENUMS----------
export const wageIntervals = ["hourly", "daily", "weekly", "monthly", "yearly"] as const;
export const wageIntervalEnum = pgEnum('wage_intervals', wageIntervals)

// ------------- TYPES----------
export type WageInterval = (typeof wageIntervals)[number];
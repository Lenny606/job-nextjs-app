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
export const locationRequirements = ["office", "remote", "hybrid"] as const;
export const statuses = ["draft", "published", "delisted"] as const;
export const experiences = ["junior", "medior", "senior"] as const;
export const types = ["full-time", "part-time", "internship"] as const;
export const wageIntervalEnum = pgEnum('wage_intervals', wageIntervals)
export const locationRequirementEnum = pgEnum('location_requirements', locationRequirements)
export const statusEnum = pgEnum('statuses', statuses)
export const experienceEnum = pgEnum('experiences', experiences)
export const typeEnum = pgEnum('types', types)

// ------------- TYPES----------
export type WageInterval = (typeof wageIntervals)[number];
export type LocationRequirement = (typeof locationRequirements)[number];
export type Status = (typeof statuses)[number];
export type Experience = (typeof experiences)[number];
export type Type = (typeof types)[number];
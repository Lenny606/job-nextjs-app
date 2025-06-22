//env vars for BE
import {createEnv} from "@t3-oss/env-nextjs"
import {z} from "zod";

/**
 * Configuration object for creating and managing environment variables.
 *
 * @typedef {Object} Env
 * @property {Object} server - Configuration for server-related environment variables.
 * @property {string} server.DB_PASSWORD - Password for the database; must be a non-empty string.
 * @property {string} server.DB_USER - Username for the database; must be a non-empty string.
 * @property {string} server.DB_PORT - Port for the database; must be a non-empty string.
 * @property {string} server.DB_HOST - Hostname for the database; must be a non-empty string.
 * @property {string} server.DB_NAME - Name of the database; must be a non-empty string.
 * @property {Object} experimental__runtimeEnv - Experimental runtime environment variables sourced from Node.js `process.env`.
 * @property {boolean} emptyStringAsUndefined - Determines whether empty strings should be treated as undefined. Defaults to true.
 * @property {Function} createFinalSchema - Function to create and transform the final schema using the provided environment variables.
 */
export const env = createEnv({
    client: {
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
        NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: z.string().min(1),
        NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: z.string().min(1),
        NEXT_PUBLIC_APP_NAME: z.string().min(1),
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
        NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL,
        NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL,
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_APP_NAME,
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME

    },
    emptyStringAsUndefined: true,
})
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
    server: {
        DB_PASSWORD: z.string().min(1),
        DB_USER: z.string().min(1),
        DB_PORT: z.string().min(1),
        DB_HOST: z.string().min(1),
        DB_NAME: z.string().min(1),
    },
    experimental__runtimeEnv: process.env,
    emptyStringAsUndefined: true,
    createFinalSchema: env => {
        return z.object(env).transform(
            val => {
                const {
                    DB_PASSWORD,
                    DB_USER,
                    DB_PORT,
                    DB_HOST,
                    DB_NAME,
                    ...rest
                } = val

                return  {
                    ...rest,
                    DATABASE_URL: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
                }
            }
        )
    }
})
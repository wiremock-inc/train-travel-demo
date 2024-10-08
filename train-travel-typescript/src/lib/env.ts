/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dlv } from "./dlv.js";

import * as z from "zod";

export interface Env {
    TRAINTRAVEL_O_AUTH2?: string | undefined;

    TRAINTRAVEL_DEBUG?: boolean | undefined;
}

export const envSchema: z.ZodType<Env, z.ZodTypeDef, unknown> = z
    .object({
        TRAINTRAVEL_O_AUTH2: z.string(),

        TRAINTRAVEL_DEBUG: z.coerce.boolean(),
    })
    .partial();

let envMemo: Env | undefined = undefined;
/**
 * Reads and validates environment variables.
 */
export function env(): Env {
    if (envMemo) {
        return envMemo;
    }

    envMemo = envSchema.parse(dlv(globalThis, "process.env") ?? dlv(globalThis, "Deno.env") ?? {});
    return envMemo;
}

/**
 * Clears the cached env object. Useful for testing with a fresh environment.
 */
export function resetEnv() {
    envMemo = undefined;
}

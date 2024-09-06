/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type Station = {
    /**
     * Unique identifier for the station.
     */
    id: string;
    /**
     * The name of the station
     */
    name: string;
    /**
     * The address of the station.
     */
    address: string;
    /**
     * The country code of the station.
     */
    countryCode: string;
    /**
     * The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones).
     */
    timezone?: string | undefined;
};

/** @internal */
export const Station$inboundSchema: z.ZodType<Station, z.ZodTypeDef, unknown> = z
    .object({
        id: z.string(),
        name: z.string(),
        address: z.string(),
        country_code: z.string(),
        timezone: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            country_code: "countryCode",
        });
    });

/** @internal */
export type Station$Outbound = {
    id: string;
    name: string;
    address: string;
    country_code: string;
    timezone?: string | undefined;
};

/** @internal */
export const Station$outboundSchema: z.ZodType<Station$Outbound, z.ZodTypeDef, Station> = z
    .object({
        id: z.string(),
        name: z.string(),
        address: z.string(),
        countryCode: z.string(),
        timezone: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            countryCode: "country_code",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Station$ {
    /** @deprecated use `Station$inboundSchema` instead. */
    export const inboundSchema = Station$inboundSchema;
    /** @deprecated use `Station$outboundSchema` instead. */
    export const outboundSchema = Station$outboundSchema;
    /** @deprecated use `Station$Outbound` instead. */
    export type Outbound = Station$Outbound;
}

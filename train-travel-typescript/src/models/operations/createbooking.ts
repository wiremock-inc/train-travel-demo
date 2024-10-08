/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64.js";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Booking successful
 */
export type CreateBookingBookingsResponseBody = {
    /**
     * Unique identifier for the booking
     */
    id?: string | undefined;
    /**
     * Identifier of the booked trip
     */
    tripId?: string | undefined;
    /**
     * Name of the passenger
     */
    passengerName?: string | undefined;
    /**
     * Indicates whether the passenger has a bicycle.
     */
    hasBicycle?: boolean | undefined;
    /**
     * Indicates whether the passenger has a dog.
     */
    hasDog?: boolean | undefined;
    links?: components.LinksSelf | undefined;
};

/**
 * Booking successful
 */
export type CreateBookingResponseBody = {
    /**
     * Unique identifier for the booking
     */
    id?: string | undefined;
    /**
     * Identifier of the booked trip
     */
    tripId?: string | undefined;
    /**
     * Name of the passenger
     */
    passengerName?: string | undefined;
    /**
     * Indicates whether the passenger has a bicycle.
     */
    hasBicycle?: boolean | undefined;
    /**
     * Indicates whether the passenger has a dog.
     */
    hasDog?: boolean | undefined;
    links?: components.LinksSelf | undefined;
};

export type CreateBookingResponseResult = CreateBookingResponseBody | Uint8Array | string;

export type CreateBookingResponse = {
    headers: { [k: string]: Array<string> };
    result: CreateBookingResponseBody | Uint8Array | string;
};

/** @internal */
export const CreateBookingBookingsResponseBody$inboundSchema: z.ZodType<
    CreateBookingBookingsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string().optional(),
        trip_id: z.string().optional(),
        passenger_name: z.string().optional(),
        has_bicycle: z.boolean().optional(),
        has_dog: z.boolean().optional(),
        links: components.LinksSelf$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            trip_id: "tripId",
            passenger_name: "passengerName",
            has_bicycle: "hasBicycle",
            has_dog: "hasDog",
        });
    });

/** @internal */
export type CreateBookingBookingsResponseBody$Outbound = {
    id?: string | undefined;
    trip_id?: string | undefined;
    passenger_name?: string | undefined;
    has_bicycle?: boolean | undefined;
    has_dog?: boolean | undefined;
    links?: components.LinksSelf$Outbound | undefined;
};

/** @internal */
export const CreateBookingBookingsResponseBody$outboundSchema: z.ZodType<
    CreateBookingBookingsResponseBody$Outbound,
    z.ZodTypeDef,
    CreateBookingBookingsResponseBody
> = z
    .object({
        id: z.string().optional(),
        tripId: z.string().optional(),
        passengerName: z.string().optional(),
        hasBicycle: z.boolean().optional(),
        hasDog: z.boolean().optional(),
        links: components.LinksSelf$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            tripId: "trip_id",
            passengerName: "passenger_name",
            hasBicycle: "has_bicycle",
            hasDog: "has_dog",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBookingBookingsResponseBody$ {
    /** @deprecated use `CreateBookingBookingsResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateBookingBookingsResponseBody$inboundSchema;
    /** @deprecated use `CreateBookingBookingsResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateBookingBookingsResponseBody$outboundSchema;
    /** @deprecated use `CreateBookingBookingsResponseBody$Outbound` instead. */
    export type Outbound = CreateBookingBookingsResponseBody$Outbound;
}

/** @internal */
export const CreateBookingResponseBody$inboundSchema: z.ZodType<
    CreateBookingResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string().optional(),
        trip_id: z.string().optional(),
        passenger_name: z.string().optional(),
        has_bicycle: z.boolean().optional(),
        has_dog: z.boolean().optional(),
        links: components.LinksSelf$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            trip_id: "tripId",
            passenger_name: "passengerName",
            has_bicycle: "hasBicycle",
            has_dog: "hasDog",
        });
    });

/** @internal */
export type CreateBookingResponseBody$Outbound = {
    id?: string | undefined;
    trip_id?: string | undefined;
    passenger_name?: string | undefined;
    has_bicycle?: boolean | undefined;
    has_dog?: boolean | undefined;
    links?: components.LinksSelf$Outbound | undefined;
};

/** @internal */
export const CreateBookingResponseBody$outboundSchema: z.ZodType<
    CreateBookingResponseBody$Outbound,
    z.ZodTypeDef,
    CreateBookingResponseBody
> = z
    .object({
        id: z.string().optional(),
        tripId: z.string().optional(),
        passengerName: z.string().optional(),
        hasBicycle: z.boolean().optional(),
        hasDog: z.boolean().optional(),
        links: components.LinksSelf$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            tripId: "trip_id",
            passengerName: "passenger_name",
            hasBicycle: "has_bicycle",
            hasDog: "has_dog",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBookingResponseBody$ {
    /** @deprecated use `CreateBookingResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateBookingResponseBody$inboundSchema;
    /** @deprecated use `CreateBookingResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateBookingResponseBody$outboundSchema;
    /** @deprecated use `CreateBookingResponseBody$Outbound` instead. */
    export type Outbound = CreateBookingResponseBody$Outbound;
}

/** @internal */
export const CreateBookingResponseResult$inboundSchema: z.ZodType<
    CreateBookingResponseResult,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => CreateBookingResponseBody$inboundSchema), b64$.zodInbound]);

/** @internal */
export type CreateBookingResponseResult$Outbound = CreateBookingResponseBody$Outbound | Uint8Array;

/** @internal */
export const CreateBookingResponseResult$outboundSchema: z.ZodType<
    CreateBookingResponseResult$Outbound,
    z.ZodTypeDef,
    CreateBookingResponseResult
> = z.union([z.lazy(() => CreateBookingResponseBody$outboundSchema), b64$.zodOutbound]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBookingResponseResult$ {
    /** @deprecated use `CreateBookingResponseResult$inboundSchema` instead. */
    export const inboundSchema = CreateBookingResponseResult$inboundSchema;
    /** @deprecated use `CreateBookingResponseResult$outboundSchema` instead. */
    export const outboundSchema = CreateBookingResponseResult$outboundSchema;
    /** @deprecated use `CreateBookingResponseResult$Outbound` instead. */
    export type Outbound = CreateBookingResponseResult$Outbound;
}

/** @internal */
export const CreateBookingResponse$inboundSchema: z.ZodType<
    CreateBookingResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Headers: z.record(z.array(z.string())),
        Result: z.union([z.lazy(() => CreateBookingResponseBody$inboundSchema), b64$.zodInbound]),
    })
    .transform((v) => {
        return remap$(v, {
            Headers: "headers",
            Result: "result",
        });
    });

/** @internal */
export type CreateBookingResponse$Outbound = {
    Headers: { [k: string]: Array<string> };
    Result: CreateBookingResponseBody$Outbound | Uint8Array;
};

/** @internal */
export const CreateBookingResponse$outboundSchema: z.ZodType<
    CreateBookingResponse$Outbound,
    z.ZodTypeDef,
    CreateBookingResponse
> = z
    .object({
        headers: z.record(z.array(z.string())),
        result: z.union([z.lazy(() => CreateBookingResponseBody$outboundSchema), b64$.zodOutbound]),
    })
    .transform((v) => {
        return remap$(v, {
            headers: "Headers",
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBookingResponse$ {
    /** @deprecated use `CreateBookingResponse$inboundSchema` instead. */
    export const inboundSchema = CreateBookingResponse$inboundSchema;
    /** @deprecated use `CreateBookingResponse$outboundSchema` instead. */
    export const outboundSchema = CreateBookingResponse$outboundSchema;
    /** @deprecated use `CreateBookingResponse$Outbound` instead. */
    export type Outbound = CreateBookingResponse$Outbound;
}

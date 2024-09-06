/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { TrainTravelCore } from "../core.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Pay for a Booking
 *
 * @remarks
 * A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.
 */
export async function paymentsCreateBookingPayment(
    client$: TrainTravelCore,
    request: operations.CreateBookingPaymentRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.CreateBookingPaymentResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.CreateBookingPaymentRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$.BookingPayment, { explode: true });

    const pathParams$ = {
        bookingId: encodeSimple$("bookingId", payload$.bookingId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/bookings/{bookingId}/payment")(pathParams$);

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    const oAuth2$ = await extractSecurity(client$.options$.oAuth2);
    const security$ = oAuth2$ == null ? {} : { oAuth2: oAuth2$ };
    const context = {
        operationID: "create-booking-payment",
        oAuth2Scopes: [],
        securitySource: client$.options$.oAuth2,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "POST",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "403", "429", "4XX", "500", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        operations.CreateBookingPaymentResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.CreateBookingPaymentResponse$inboundSchema, {
            hdrs: true,
            key: "Result",
        }),
        m$.fail([400, 401, 403, 429, 500]),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}

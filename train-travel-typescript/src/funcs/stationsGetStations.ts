/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { TrainTravelCore } from "../core.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
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

export enum GetStationsAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

/**
 * Get a list of train stations
 *
 * @remarks
 * Returns a paginated and searchable list of all train stations.
 */
export async function stationsGetStations(
    client$: TrainTravelCore,
    request: operations.GetStationsRequest,
    options?: RequestOptions & { acceptHeaderOverride?: GetStationsAcceptEnum }
): Promise<
    Result<
        operations.GetStationsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = typeof request === "undefined" ? {} : request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.GetStationsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/stations")();

    const query$ = encodeFormQuery$({
        coordinates: payload$.coordinates,
        page: payload$.page,
        search: payload$.search,
    });

    const headers$ = new Headers({
        Accept: options?.acceptHeaderOverride || "application/json;q=1, application/xml;q=0",
    });

    const oAuth2$ = await extractSecurity(client$.options$.oAuth2);
    const security$ = oAuth2$ == null ? {} : { oAuth2: oAuth2$ };
    const context = {
        operationID: "get-stations",
        oAuth2Scopes: [],
        securitySource: client$.options$.oAuth2,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
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
        operations.GetStationsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.GetStationsResponse$inboundSchema, { hdrs: true, key: "Result" }),
        m$.bytes(200, operations.GetStationsResponse$inboundSchema, {
            ctype: "application/xml",
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

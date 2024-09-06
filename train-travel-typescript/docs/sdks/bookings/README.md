# Bookings
(*bookings*)

## Overview

Create and manage bookings for train trips, including passenger details
and optional extras.


### Available Operations

* [getBookings](#getbookings) - List existing bookings
* [createBooking](#createbooking) - Create a booking
* [getBooking](#getbooking) - Get a booking
* [deleteBooking](#deletebooking) - Delete a booking

## getBookings

Returns a list of all trip bookings by the authenticated user.

### Example Usage

```typescript
import { TrainTravel } from "train-travel";

const trainTravel = new TrainTravel({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravel.bookings.getBookings();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelCore } from "train-travel/core.js";
import { bookingsGetBookings } from "train-travel/funcs/bookingsGetBookings.js";

// Use `TrainTravelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravel = new TrainTravelCore({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsGetBookings(trainTravel);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBookingsResponse](../../models/operations/getbookingsresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## createBooking

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { TrainTravel } from "train-travel";

const trainTravel = new TrainTravel({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravel.bookings.createBooking(await openAsBlob("example.file"));
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { TrainTravelCore } from "train-travel/core.js";
import { bookingsCreateBooking } from "train-travel/funcs/bookingsCreateBooking.js";

// Use `TrainTravelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravel = new TrainTravelCore({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsCreateBooking(trainTravel, await openAsBlob("example.file"));

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/components/bookinginput.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateBookingResponse](../../models/operations/createbookingresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getBooking

Returns the details of a specific booking.

### Example Usage

```typescript
import { TrainTravel } from "train-travel";

const trainTravel = new TrainTravel({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravel.bookings.getBooking({
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelCore } from "train-travel/core.js";
import { bookingsGetBooking } from "train-travel/funcs/bookingsGetBooking.js";

// Use `TrainTravelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravel = new TrainTravelCore({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsGetBooking(trainTravel, {
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBookingRequest](../../models/operations/getbookingrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBookingResponse](../../models/operations/getbookingresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## deleteBooking

Deletes a booking, cancelling the hold on the trip.

### Example Usage

```typescript
import { TrainTravel } from "train-travel";

const trainTravel = new TrainTravel({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravel.bookings.deleteBooking({
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelCore } from "train-travel/core.js";
import { bookingsDeleteBooking } from "train-travel/funcs/bookingsDeleteBooking.js";

// Use `TrainTravelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravel = new TrainTravelCore({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsDeleteBooking(trainTravel, {
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBookingRequest](../../models/operations/deletebookingrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteBookingResponse](../../models/operations/deletebookingresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

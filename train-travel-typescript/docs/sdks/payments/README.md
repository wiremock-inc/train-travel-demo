# Payments
(*payments*)

## Overview

Pay for bookings using a card or bank account, and view payment
status and history.

> warn
> Bookings usually expire within 1 hour so you'll need to make your payment
> before the expiry date 


### Available Operations

* [createBookingPayment](#createbookingpayment) - Pay for a Booking

## createBookingPayment

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

### Example Usage

```typescript
import { TrainTravel } from "train-travel";

const trainTravel = new TrainTravel({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravel.payments.createBookingPayment({
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
    bookingPayment: {
      amount: 49.99,
      currency: "gbp",
      source: {
        name: "J. Doe",
        number: "4242424242424242",
        cvc: 123,
        expMonth: 12,
        expYear: 2025,
        addressLine1: "123 Fake Street",
        addressLine2: "4th Floor",
        addressCity: "London",
        addressCountry: "gb",
        addressPostCode: "N12 9XX",
      },
    },
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
import { paymentsCreateBookingPayment } from "train-travel/funcs/paymentsCreateBookingPayment.js";

// Use `TrainTravelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravel = new TrainTravelCore({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const res = await paymentsCreateBookingPayment(trainTravel, {
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
    bookingPayment: {
      amount: 49.99,
      currency: "gbp",
      source: {
        name: "J. Doe",
        number: "4242424242424242",
        cvc: 123,
        expMonth: 12,
        expYear: 2025,
        addressLine1: "123 Fake Street",
        addressLine2: "4th Floor",
        addressCity: "London",
        addressCountry: "gb",
        addressPostCode: "N12 9XX",
      },
    },
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
| `request`                                                                                                                                                                      | [operations.CreateBookingPaymentRequest](../../models/operations/createbookingpaymentrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateBookingPaymentResponse](../../models/operations/createbookingpaymentresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

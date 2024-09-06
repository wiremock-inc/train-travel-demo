# Stations
(*stations*)

## Overview

Find and filter train stations across Europe, including their location
and local timezone.


### Available Operations

* [getStations](#getstations) - Get a list of train stations

## getStations

Returns a paginated and searchable list of all train stations.

### Example Usage

```typescript
import { TrainTravel } from "train-travel";

const trainTravel = new TrainTravel({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravel.stations.getStations({
    page: 1,
    coordinates: "52.5200,13.4050",
    search: "Milano Centrale",
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
import { stationsGetStations } from "train-travel/funcs/stationsGetStations.js";

// Use `TrainTravelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravel = new TrainTravelCore({
  oAuth2: process.env["TRAINTRAVEL_O_AUTH2"] ?? "",
});

async function run() {
  const res = await stationsGetStations(trainTravel, {
    page: 1,
    coordinates: "52.5200,13.4050",
    search: "Milano Centrale",
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
| `request`                                                                                                                                                                      | [operations.GetStationsRequest](../../models/operations/getstationsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStationsResponse](../../models/operations/getstationsresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

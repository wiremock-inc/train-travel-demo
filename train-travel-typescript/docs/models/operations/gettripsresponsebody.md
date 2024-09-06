# GetTripsResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

## Example Usage

```typescript
import { GetTripsResponseBody } from "train-travel/models/operations";

let value: GetTripsResponseBody = {
    data: [
        {
            id: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
            origin: "Paris Gare du Nord",
            destination: "Paris Gare du Nord",
            departureTime: new Date("2024-02-01T10:00:00Z"),
            arrivalTime: new Date("2024-02-01T16:00:00Z"),
            operator: "Deutsche Bahn",
            price: 50,
        },
    ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [components.Trip](../../models/components/trip.md)[]                 | :heavy_minus_sign:                                                   | N/A                                                                  |
| `links`                                                              | [operations.GetTripsLinks](../../models/operations/gettripslinks.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
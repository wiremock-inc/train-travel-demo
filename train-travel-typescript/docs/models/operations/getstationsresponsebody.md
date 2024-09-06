# GetStationsResponseBody

OK

## Example Usage

```typescript
import { GetStationsResponseBody } from "train-travel/models/operations";

let value: GetStationsResponseBody = {
    data: [
        {
            id: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
            name: "Berlin Hauptbahnhof",
            address: "18 Rue de Dunkerque 75010 Paris, France",
            countryCode: "FR",
            timezone: "Europe/Berlin",
        },
    ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Station](../../models/components/station.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
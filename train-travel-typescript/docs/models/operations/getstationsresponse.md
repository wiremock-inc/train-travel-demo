# GetStationsResponse

## Example Usage

```typescript
import { GetStationsResponse } from "train-travel/models/operations";

let value: GetStationsResponse = {
    headers: {
        key: ["<value>"],
    },
    result: {
        data: [
            {
                id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
                name: "Paris Gare du Nord",
                address: "18 Rue de Dunkerque 75010 Paris, France",
                countryCode: "FR",
                timezone: "Europe/Berlin",
            },
        ],
    },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.GetStationsResponseResult* | :heavy_check_mark:                     | N/A                                    |
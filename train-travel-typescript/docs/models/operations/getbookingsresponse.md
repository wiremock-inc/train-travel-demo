# GetBookingsResponse

## Example Usage

```typescript
import { GetBookingsResponse } from "train-travel/models/operations";

let value: GetBookingsResponse = {
    headers: {
        key: ["<value>"],
    },
    result: new TextEncoder().encode("0x29a54BAa4c"),
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.GetBookingsResponseResult* | :heavy_check_mark:                     | N/A                                    |
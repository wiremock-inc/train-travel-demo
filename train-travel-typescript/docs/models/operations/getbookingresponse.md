# GetBookingResponse

## Example Usage

```typescript
import { GetBookingResponse } from "train-travel/models/operations";

let value: GetBookingResponse = {
    headers: {
        key: ["<value>"],
    },
    result: new TextEncoder().encode("0x3d4d8EDf97"),
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `headers`                             | Record<string, *string*[]>            | :heavy_check_mark:                    | N/A                                   |
| `result`                              | *operations.GetBookingResponseResult* | :heavy_check_mark:                    | N/A                                   |
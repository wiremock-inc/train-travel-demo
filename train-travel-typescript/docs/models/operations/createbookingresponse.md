# CreateBookingResponse

## Example Usage

```typescript
import { CreateBookingResponse } from "train-travel/models/operations";

let value: CreateBookingResponse = {
    headers: {
        key: ["<value>"],
    },
    result: {
        id: "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
        tripId: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
        passengerName: "John Doe",
    },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `headers`                                | Record<string, *string*[]>               | :heavy_check_mark:                       | N/A                                      |
| `result`                                 | *operations.CreateBookingResponseResult* | :heavy_check_mark:                       | N/A                                      |
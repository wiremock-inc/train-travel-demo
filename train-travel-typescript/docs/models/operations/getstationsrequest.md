# GetStationsRequest

## Example Usage

```typescript
import { GetStationsRequest } from "train-travel/models/operations";

let value: GetStationsRequest = {
    page: 1,
    coordinates: "52.5200,13.4050",
    search: "Paris",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `page`                                                                                                                              | *number*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | The page number to return                                                                                                           | 1                                                                                                                                   |
| `coordinates`                                                                                                                       | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | The latitude and longitude of the user's location, to narrow down the search results to sites within a proximity of this location.<br/> | 52.5200,13.4050                                                                                                                     |
| `search`                                                                                                                            | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | A search term to filter the list of stations by name or address.<br/>                                                               | Milano Centrale                                                                                                                     |
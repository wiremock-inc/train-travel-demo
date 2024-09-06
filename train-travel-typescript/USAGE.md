<!-- Start SDK Example Usage [usage] -->
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
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
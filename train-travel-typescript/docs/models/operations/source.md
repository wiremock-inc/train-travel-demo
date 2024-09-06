# Source

The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.

## Example Usage

```typescript
import { Source } from "train-travel/models/operations";

let value: Source = {
    name: "<value>",
    number: "<value>",
    accountType: "company",
    bankName: "Starling Bank",
    country: "Oman",
};
```

## Supported Types

### `operations.Card`

```typescript
const value: operations.Card = /* values here */
```

### `operations.BankAccount`

```typescript
const value: operations.BankAccount = /* values here */
```


# @muftar/types

TypeScript type definitions for the Muftar platform.

## Installation

```bash
npm install @muftar/types
# or
yarn add @muftar/types
```

## Usage

```typescript
import { Userdata, Load, Organization, Driver } from '@muftar/types';

// Use the types in your code
const user: Userdata = {
  // ... user properties
};

const load: Load = {
  // ... load properties
};
```

## Available Types

This package includes TypeScript definitions for:

- **User Management**: `Userdata`, `UserVerificationRequest`, `UserSignature`, `UserFcmToken`
- **Organizations**: `Organization`, `OrganizationUser`, `OrganizationInvite`, `OrganizationInviteLink`
- **Transportation**: `Load`, `Driver`, `DriverReport`, `Equipment`
- **Billing**: `BillingProfile`, `BillingInvoice`, `BillingLineItem`
- **Communication**: `Chat`, `ChatUser`, `ChatMessage`, `Notification`
- **Financial**: `CreditWallet`, `CreditTransaction`
- **Media & Location**: `Media`, `Location`
- **Applications**: `JobApplication`

## Development

```bash
# Build the package
yarn build

# Clean build artifacts
yarn clean
```

## License

MIT 
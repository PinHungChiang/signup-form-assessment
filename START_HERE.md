# Setup

Open a terminal in the project folder and run:

```bash
npm ci
npm start
```

Press `w` to open the web version. For a phone, use an Expo Go version compatible with this project's Expo SDK.

## Project files

- `src/app/index.tsx`: sign-up form and Zod validation
- `src/app/confirmation.tsx`: confirmation screen
- `src/app/_layout.tsx`: Expo Router stack
- `package.json`: dependencies and commands

## Checks

```bash
npm run typecheck
npm run lint
```

The form and navigation have been implemented. A TypeScript syntax check passed, but dependencies were not available in this environment to run the full lint/typecheck or test the app on a phone.

## Submission

The current code is in the GitHub `main` branch. D2L submission is a separate step.

## AI assistance

AI helped prepare the project and some code. Follow the instructor's rules for documenting any assistance.

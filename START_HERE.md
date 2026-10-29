# Setup

Open a terminal in the project folder and run:

```bash
npm ci
npm start
```

Press `w` to open the web version. For a phone, use an Expo Go version compatible with this project's Expo SDK.

## Project files

- `src/app/index.tsx`: entry screen
- `src/app/_layout.tsx`: Expo Router layout
- `package.json`: dependencies and commands

TypeScript, Expo Router, react-hook-form, Zod, and @hookform/resolvers are included. Import `zodResolver` from `@hookform/resolvers/zod`.

## Checks

```bash
npm run typecheck
npm run lint
```

Both checks passed for the starter. Phone testing has not been completed.

## Current status

Only project setup is complete. The sign-up form, validation schema, submit handler, and confirmation screen still need to be implemented. Uploading this starter to GitHub does not complete the assessment or the D2L submission.

## AI assistance

AI helped prepare and check this starter and upload it to GitHub. Follow the instructor's AI-use rules and retain the assistance history. Confirm whether this assessment requires an `ai-usage.docx` attachment.

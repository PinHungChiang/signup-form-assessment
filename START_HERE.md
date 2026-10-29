# Expo initialization only

This is the official Expo SDK 58 default template, reset using its own reset-project command. No assessment form, validation schema, submit handler, or confirmation screen has been implemented.

## Mac setup
Install Node.js 24 LTS if needed. Extract the ZIP, open a terminal in signup-assessment-starter, then run:

    npm ci
    npm start

Press w for the browser, or scan the QR code using a compatible Expo Go installation on the same network.

Entry screen: src/app/index.tsx. Router layout: src/app/_layout.tsx.

Installed: TypeScript, Expo Router, react-hook-form, zod, @hookform/resolvers. Import zodResolver from @hookform/resolvers/zod; it is not a separate package.

## Verification
TypeScript and direct ESLint checks passed. Web bundle export passed. Native phone execution was not tested. Online Expo dependency validation timed out; offline validation reported dependencies up to date. Expo lint wrapper incorrectly rejected installed ESLint 9, so npm run lint uses ESLint directly.

This starter is tracked in GitHub. No D2L submission has been made. The ZIP excludes dependencies, generated output, and Git history. This starter is not a completed assessment or end-of-class submitted attempt. Record AI assistance as required by the assessment and attach your complete prompt/response history in ai-usage.docx.

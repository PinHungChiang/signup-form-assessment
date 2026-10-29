# Sign-up Form Assessment

CPRG-303 form assessment built with Expo, React Native, TypeScript, React Hook Form, and Zod.

## Run the app

```bash
npm ci
npm start
```

Press `w` for the browser or open the project using a compatible Expo Go client.

## Form

The main screen asks for a full name, email, password, and confirmation password. Zod checks that the name has at least 2 characters, the email is valid, the password has at least 8 characters, and the two passwords match. Errors appear underneath the related fields.

After a valid submission, the app logs the name and email (never the passwords) and goes to a confirmation screen. This is a demo form; it does not create a real account.

## Checks

```bash
npm run typecheck
npm run lint
```

The main files are `src/app/index.tsx`, `src/app/confirmation.tsx`, and `src/app/_layout.tsx`.

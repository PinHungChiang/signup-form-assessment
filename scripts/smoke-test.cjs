const assert = require('node:assert/strict');
const { chromium } = require('playwright');

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const consoleMessages = [];

  page.on('console', (message) => consoleMessages.push(message.text()));

  try {
    await page.goto('http://127.0.0.1:8081/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await page.getByText('Create an account', { exact: true }).waitFor();

    // Empty form should show the error for each required field.
    await page.getByRole('button', { name: 'Sign up' }).click();
    for (const message of [
      'Please enter at least 2 characters.',
      'Please enter a valid email address.',
      'Password must be at least 8 characters.',
      'Please confirm your password.',
    ]) {
      await page.getByText(message, { exact: true }).waitFor();
    }

    // Invalid inputs should be rejected.
    await page.getByLabel('Full name').fill('Alex Doe');
    await page.getByLabel('Email').fill('wrong-email');
    await page.getByLabel('Password', { exact: true }).fill('abc');
    await page.getByLabel('Confirm password').fill('xyz');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.getByText('Passwords do not match.', { exact: true }).waitFor();
    assert.equal(await page.getByText('Please enter a valid email address.').isVisible(), true);
    assert.equal(await page.getByText('Password must be at least 8 characters.').isVisible(), true);

    // Correct inputs should navigate to the confirmation screen.
    await page.getByLabel('Email').fill('alex@example.com');
    await page.getByLabel('Password', { exact: true }).fill('password123');
    await page.getByLabel('Confirm password').fill('password123');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.getByText('Sign-up successful!', { exact: true }).waitFor();
    assert.match(page.url(), /confirmation/);
    await page.getByText('Thanks, Alex Doe!', { exact: true }).waitFor();
    assert.equal(consoleMessages.some((line) => line.includes('password123')), false);

    await page.getByRole('button', { name: 'Back to form' }).click();
    await page.getByText('Create an account', { exact: true }).waitFor();

    console.log('Form smoke test passed: errors, valid submission, and navigation.');
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

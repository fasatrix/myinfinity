import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('');
  await page.getByPlaceholder('Username').fill(process.env.USERNAME ?? "");
  await page.getByPlaceholder('Password').fill(process.env.PASSWORD ?? "");
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('iframe[name="Main"]').contentFrame().getByRole('button', { name: 'Presenza' }).click();
});


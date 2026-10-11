import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.calculator.net/bmi-calculator.html');
  await page.locator('#cage').click();
  await page.locator('#cage').fill('21');
  await page.locator('#cheightmeter').click();
  await page.locator('#cheightmeter').fill('175');
  await page.locator('#ckg').dblclick();
  await page.locator('#ckg').fill('50');
  await page.getByRole('button', { name: 'Calculate' }).click();
});
import { test, expect } from '@playwright/test';

test('check link about', async ({ page }) => {
  await page.goto('http://localhost:8888/');
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page.locator('#app')).toContainText('This is an about page');
});
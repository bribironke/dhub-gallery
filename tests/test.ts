import { expect, test } from '@playwright/test';

// Index page
test('index page has expected logo anchor tag', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByLabel('logo', { exact: true })).toBeVisible();
});

test('index page has expected welcome h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByLabel('welcome', { exact: true })).toBeVisible();
});

// Upload page
// test('upload page has expected h1', async ({ page }) => {
// 	await page.goto('/upload');
// 	await expect(page.getByLabel('upload callout', { exact: true })).toBeVisible();
// });
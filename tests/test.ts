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

// Login page
test('should login with right credentials', async ({ page }) => {
	const email = 'john.doe@gmail.com'
	const password = '58995331'
	// const body = { email, password }
	await page.goto('/login');
	const emailField = await page.getByLabel('emfield') as unknown as HTMLInputElement
	const passwField = await page.getByLabel("pwfield") as unknown as HTMLInputElement
	const submitBtn = await page.getByRole('button', { name: /submit/i }).click();
	emailField.value = email
	passwField.value = password
	console.log("emailField", emailField.value)
	await expect(page.getByRole('heading', { name: 'Upload Picture' })).toBeVisible();
});
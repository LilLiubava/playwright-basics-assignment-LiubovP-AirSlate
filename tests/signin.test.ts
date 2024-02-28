import { test } from '@playwright/test';

test('Log in an existing user', async ({ page }) => {
    const emailInput = page.getByRole('main').getByPlaceholder('Please Enter Your Email');
    const passwordInput = page.getByPlaceholder('Please Enter Your Password');
    const logInButton = page.getByRole('button', { name: 'Login' });

    await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
    await emailInput.click();
    await emailInput.fill('attestedtest+1709142799198@gmail.com');
    await passwordInput.click();
    await passwordInput.fill('Test!123');
    await logInButton.click();
});
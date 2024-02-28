import { test } from '@playwright/test';

test('Create a new user', async ({ page }) => {
    const emailInput = page.getByRole('main').getByPlaceholder('Please Enter Your Email');
    const firstNameInput = page.getByPlaceholder('Please Enter Your First Name');
    const lastNameInput = page.getByPlaceholder('Please Enter Your Last Name');
    const passwordInput = page.getByPlaceholder('Please Enter Your Password');
    const signUpButton = page.getByRole('button', { name: 'Sign Up' });

    await page.goto('https://shopdemo-alex-hot.koyeb.app/register');
    await emailInput.click();
    await emailInput.fill(`attestedtest+${Date.now()}@gmail.com`);
    await firstNameInput.click();
    await firstNameInput.fill('Liubov');
    await lastNameInput.click();
    await lastNameInput.fill('P');
    await passwordInput.click();
    await passwordInput.fill('Test!123');
    await signUpButton.click();
});
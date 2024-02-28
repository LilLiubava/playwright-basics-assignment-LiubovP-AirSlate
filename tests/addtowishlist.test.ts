import { test, expect } from "@playwright/test";

test('Add and delete an item from wishlist', async ({ page }) =>{
    const emailInput = page.getByRole('main').getByPlaceholder('Please Enter Your Email');
    const passwordInput = page.getByPlaceholder('Please Enter Your Password');
    const logInButton = page.getByRole('button', { name: 'Login' });

    await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
    await emailInput.click();
    await emailInput.fill('attestedtest+1709142799198@gmail.com');
    await passwordInput.click();
    await passwordInput.fill('Test!123');
    await logInButton.click();
    await page.getByRole('link', { name: 'Shop' }).click();
    await page.locator('#main-circ').first().click();
    await page.getByRole('link', { name: 'Liubov ' }).click();
    await page.getByRole('menuitem', { name: 'Dashboard' }).click();
    await page.getByRole('link', { name: 'WishList' }).click();
    await page.getByRole('main').getByRole('button').click();


});
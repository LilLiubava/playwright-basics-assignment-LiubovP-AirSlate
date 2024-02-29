import { test} from '@playwright/test';

test('Sign Up an mercant (approve request)', async ({ page }) => {
const fullNameInput = page.getByPlaceholder('Your Full Name');
const emailInput = page.getByPlaceholder('Your Email Address');
const phoneInput = page.getByPlaceholder('Your Phone Number');
const brandInput = page.getByPlaceholder('Your Business Brand');
const descriptionInput = page.getByPlaceholder('Please Describe Your Business');
const emailLoginInput = page.getByRole('main').getByPlaceholder('Please Enter Your Email');
const passwordLoginInput = page.getByPlaceholder('Please Enter Your Password');
const searchInput = page.getByPlaceholder('Type email, phone number,');

  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await fullNameInput.click();
  await fullNameInput.fill('New Seller');
  await emailInput.click();
  await emailInput.fill(`attestedtest+${Date.now()}@gmail.com`);
  await phoneInput.click();
  await phoneInput.fill('0961111111');
  await brandInput.click();
  await brandInput.fill('My brand');
  await descriptionInput.click();
  await descriptionInput.fill('My biggest business');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
  await emailLoginInput.click();
  await emailLoginInput.fill('xotabu4@gmail.com');
  await passwordLoginInput.click();
  await passwordLoginInput.fill('xotabu4@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Merchants' }).click();
  await searchInput.click();
  await searchInput.fill('My brand');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  
});
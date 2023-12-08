const { test, expect } = require('@playwright/test');
const pageUrl = "http://localhost:3001";

test('Verify "All Books" link is visible', async ({page}) =>{
    await page.goto(pageUrl);
    await page.waitForSelector("#site-header > nav");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true)
});

test('Verify "Login button" link is visible', async ({page}) =>{
    await page.goto(pageUrl);
    await page.waitForSelector("#site-header > nav");
    const loginButton= await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible();
    expect(isLoginButtonVisible).toBe(true)
});

test('Verify "Register button" link is visible', async ({page}) =>{
    await page.goto(pageUrl);
    await page.waitForSelector("#site-header > nav");
    const registerButton= await page.$('a[href="/register"]');
    const isRegisterButtonVisible = await registerButton.isVisible();
    expect(isRegisterButtonVisible).toBe(true)
});

test('Verify "All Books" link is visible', async ({page}) =>{
    await page.goto("http://localhost:3001/login");
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true)
});

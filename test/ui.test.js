const { test, expect } = require('@playwright/test');

test('Verify "All Books" link is visible', async ({page}) =>{
    await page.goto("http://localhost:3001");
    await page.waitForSelector("#site-header > nav");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true)
})
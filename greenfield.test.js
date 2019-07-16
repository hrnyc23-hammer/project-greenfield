/* eslint-disable no-undef */
const puppeteer = require('puppeteer');

beforeAll(async () => {
  puppeteer.launch().then((async browser => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8888');
    await browser.close();
  }));
});

test('tests running', () => {
  expect(true).toEqual(true);
});

test('can run e2e tests', async () => {
  let selector = await page.$eval()
});
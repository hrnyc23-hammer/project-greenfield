/* eslint-disable no-undef */
const puppeteer = require('puppeteer');

let page;
let browser;
const width = 1920;
const height = 1080;

// UNCOMMENT IF RUNNING TESTS LOCALLY - COMMENTED WHILE NOT DEPLOYED

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false
//   });
//   page = await browser.newPage();
//   await page.setViewport({ width, height });
// });

// afterAll(() => {
//   browser.close();
// });

test('tests running', () => {
  expect(true).toEqual(true);
});

// describe('end-to-end tests', () => {
  
//   beforeEach(async () => {
//     await page.goto('http://localhost:8888');
//   });

//   test('can run e2e tests', async () => {
//     let selector = 'p';
//     let text = await page.$eval(selector, el => {
//       return el.textContent;
//     });
//     expect(text).toEqual('Rendered Properly');
//   });
// });
const { str } = require('./src/index.js');
const puppeteer = require('puppeteer');

test('tests running', () => {
  expect(str).toEqual('Welcome to Project Greenfield');
});
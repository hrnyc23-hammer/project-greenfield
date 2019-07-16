const { str } = require('./src/index.js');

test('tests running', () => {
  expect(str).toEqual('Welcome to Project Greenfield');
});
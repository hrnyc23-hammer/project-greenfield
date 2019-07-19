import puppeteer from 'puppeteer';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchNewRelated from './src/actions/fetchNewRelated.js';
import changeRelated from './src/actions/changeRelated.js';
import changeSelectedStyle from './src/actions/changeSelectedStyle.js';
import sample from './src/data/sampleItemData.js';

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

describe('redux', () => {
  const mockStore = configureStore([thunk]);

  describe('dispatch actions', () => {

    let store;

    beforeEach(() => {
      const initialState = sample;
      store = mockStore(initialState);
    });

    it('should dispatch related change', () => {
      store.dispatch(changeRelated([sample.info]));
      const actions = store.getActions();
      const expectedPayload = {type: 'CHANGE_RELATED', related: [sample.info]};
      expect(actions).toEqual([expectedPayload]);
    });

    it('should dispatch selected style change', () => {
      store.dispatch(changeSelectedStyle({foo: 'bar'}));
      const action = store.getActions();
      const expectedPayload = { type: 'OVERVIEW_CHANGE_SELECTED_STYLE', selectedStyle: {foo: 'bar'}};
      expect(action).toEqual([expectedPayload]);
    })
    
  });
});

// describe('end-to-end tests', () => {
  
//   beforeEach(async () => {
//     await page.goto('http://localhost:8888');
//   });

//   test('can run e2e tests', async () => {
//     let selector = '#app';
//     let text = await page.$eval(selector, el => {
//       return el !== undefined;
//     });
//     expect(text).toEqual(true);
//   });
// });
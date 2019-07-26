import puppeteer from 'puppeteer';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchNewRelated from './src/actions/fetchNewRelated.js';
import changeRelated from './src/actions/changeRelated.js';
import changeSelectedStyle from './src/actions/changeSelectedStyle.js';
import changeSize from './src/actions/changeSize.js';
import addToOutfits from './src/actions/addToOutfits';
import removeFromOutfits from './src/actions/removeFromOutfits.js';
import changeInfo from './src/actions/changeInfo.js';
import reviewsChange from './src/actions/reviewsChange.js'
import reviewsChangeBarFilter from './src/actions/reviewsChangeBarFilter.js'
import reviewsResetBarFilter from './src/actions/reviewsResetBarFilter.js'
import reviewsLength from './src/actions/reviewsLength.js'
import reviewsLengthReset from './src/actions/reviewsLengthReset.js'
import reviewsLoaded from './src/actions/reviewsLoaded.js'
import reviewsLoadedReset from './src/actions/reviewsLoadedReset.js'
import reviewsReducer from './src/reducers/reviewsReducer.js'
import reviewsLoadedReducer from './src/reducers/reviewsLoadedReducer.js'
import reviewsLengthReducer from './src/reducers/reviewsLengthReducer.js'
import reviewsChangeBarFilterReducer from './src/reducers/reviewsChangeBarFilterReducer.js'
import metaReducer from './src/reducers/metaReducer.js'

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
      const initialState = {};
      store = mockStore(initialState);
    });

    it('should dispatch related change', () => {
      store.dispatch(changeRelated([{ foo: 'bar' }]));
      const actions = store.getActions();
      const expectedPayload = { type: 'CHANGE_RELATED', related: [{ foo: 'bar' }] };
      expect(actions).toEqual([expectedPayload]);
    });

    it('should dispatch to add outfits', () => {
      store.dispatch(addToOutfits({ foo: 'bar' }));
      const actions = store.getActions();
      const expectedPayload = { type: 'ADD_TO_OUTFITS', outfits: { foo: 'bar' } };
      expect(actions).toEqual([expectedPayload]);
    })

    it('should dispatch to remove from outfits', () => {
      store.dispatch(removeFromOutfits('foo'));
      const actions = store.getActions();
      const expectedPayload = { type: 'REMOVE_FROM_OUTFITS', outfitId: 'foo' };
      expect(actions).toEqual([expectedPayload]);
    })

    it('should dispatch selected style change', () => {
      store.dispatch(changeSelectedStyle({ 1: 'onesie' }));
      const action = store.getActions();
      const expectedPayload = { type: 'OVERVIEW_CHANGE_SELECTED_STYLE', selectedStyle: { 1: 'onesie' } };
      expect(action).toEqual([expectedPayload]);
    })

    it('should dispatch size change', () => {
      store.dispatch(changeSize('M'));
      const action = store.getActions();
      const expectedPayload = { type: 'OVERVIEW_CHANGE_SIZE', size: 'M' };
      expect(action).toEqual([expectedPayload]);
    })

    it('should dispatch new product info', () => {
      store.dispatch(changeInfo({ id: 1, name: 'jacket' }));
      const action = store.getActions();
      const expectedPayload = { type: 'OVERVIEW_CHANGE_INFO', info: { id: 1, name: 'jacket' } };
      expect(action).toEqual([expectedPayload]);
    })
    it('should dispatch new reviews', () => {
      store.dispatch(reviewsChange({ id: 1, results: 'none' }));
      const action = store.getActions();
      const expectedPayload = { type: 'CHANGE_REVIEWS', reviews: { id: 1, results: 'none' } };
      expect(action).toEqual([expectedPayload]);
    })

    it('should dispatch barFilter', () => {
      store.dispatch(reviewsChangeBarFilter(4));
      const action = store.getActions();
      const expectedPayload = { type: 'CHANGE_BAR_FILTER', barFilter: 4 };
      expect(action).toEqual([expectedPayload]);
    })

    it('should dispatch change to barFilter', () => {
      store.dispatch(reviewsChangeBarFilter(4));
      const action = store.getActions();
      const expectedPayload = { type: 'CHANGE_BAR_FILTER', barFilter: 4 };
      expect(action).toEqual([expectedPayload]);
    })

    it('should dispatch to barFilter resetter', () => {
      store.dispatch(reviewsResetBarFilter());
      const action = store.getActions();
      const expectedPayload = { type: 'RESET_BAR_FILTER' };
      expect(action).toEqual([expectedPayload]);
    })

    it('should dispatch to reviews length incrementer', () => {
      store.dispatch(reviewsLength());
      const action = store.getActions();
      const expectedPayload = { type: 'CHANGE_REVIEW_LENGTH' };
      expect(action).toEqual([expectedPayload]);
    })

    it('should dispatch to reviews length resetter', () => {
      store.dispatch(reviewsLengthReset());
      const action = store.getActions();
      const expectedPayload = { type: 'RESET_REVIEW_LENGTH' };
      expect(action).toEqual([expectedPayload]);
    })

    it('should dispatch loaded reviews', () => {
      store.dispatch(reviewsLoaded([1, 2]));
      const action = store.getActions();
      const expectedPayload = { type: 'ADD_LOADED_REVIEWS', payload: [1, 2] };
      expect(action).toEqual([expectedPayload]);
    })

    it('should dispatch to loaded reviews resetter', () => {
      store.dispatch(reviewsLoadedReset());
      const action = store.getActions();
      const expectedPayload = { type: 'RESET_LOADED_REVIEWS' };
      expect(action).toEqual([expectedPayload]);
    })
  });
  describe('reducers', () => {

    it('should handle initializing and setting reviews', () => {
      expect(reviewsReducer(undefined, [])).toEqual([])
      expect(reviewsReducer([], { type: 'CHANGE_REVIEWS', reviews: [1, 2, 3] })).toEqual([1, 2, 3])
    })

    it('should add to and reset loaded reviews', () => {
      expect(reviewsLoadedReducer(undefined, [])).toEqual([])
      expect(reviewsLoadedReducer([], { type: 'ADD_LOADED_REVIEWS', payload: [1, 2] })).toEqual([1, 2])
      expect(reviewsLoadedReducer([1, 2], { type: 'ADD_LOADED_REVIEWS', payload: [3] })).toEqual([1, 2, 3])
      expect(reviewsLoadedReducer([1, 2, 3], { type: 'RESET_LOADED_REVIEWS' })).toEqual([])
    })

    it('should increment and reset reviews length', () => {
      expect(reviewsLengthReducer(undefined, 1)).toEqual(1)
      expect(reviewsLengthReducer(1, { type: 'CHANGE_REVIEW_LENGTH' })).toEqual(3)
      expect(reviewsLengthReducer(3, { type: 'RESET_REVIEW_LENGTH' })).toEqual(1)
    })

    it('should add to and reset bar filter', () => {
      expect(reviewsChangeBarFilterReducer(undefined, [])).toEqual([])
      expect(reviewsChangeBarFilterReducer([], { type: 'CHANGE_BAR_FILTER', barFilter: 2 })).toEqual([2])
      expect(reviewsChangeBarFilterReducer([2], { type: 'CHANGE_BAR_FILTER', barFilter: 3 })).toEqual([2, 3])
      expect(reviewsChangeBarFilterReducer([2, 3], { type: 'RESET_BAR_FILTER' })).toEqual([])
    })

    it('should change meta', () => {
      expect(metaReducer(undefined, {})).toEqual({})
      expect(metaReducer({}, { type: 'CHANGE_META', meta: { a: 1 } })).toEqual({ a: 1 })
    })
  })
});

// describe('end-to-end tests', () => {

//   beforeEach(async () => {
//     await page.goto('http://localhost:8866');
//   });

//   test('can run e2e tests', async () => {
//     let selector = '#app';
//     let text = await page.$eval(selector, el => {
//       return el !== undefined;
//     });
//     expect(text).toEqual(true);
//   });
// });
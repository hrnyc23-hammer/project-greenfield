import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/main.js'
import thunkMiddleWare from 'redux-thunk'
import sample from '../data/sampleItemData.js'

var store = createStore(rootReducer,
    {
        info: sample.info,
        styles: sample.styles,
        related: sample.related,
        qa: sample.qa,
        reviews: sample.reviews,
        meta: sample.meta
    },
    applyMiddleware(
        thunkMiddleWare
    ));

export default store;
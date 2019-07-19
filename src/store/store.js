import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/main.js";
import thunkMiddleWare from "redux-thunk";
import sample from "../data/sampleItemData.js";

var store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleWare)
);

export default store;

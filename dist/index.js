"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _app = _interopRequireDefault(require("./components/app.jsx"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _main = _interopRequireDefault(require("./reducers/main.js"));

var preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
console.log(preloadedState);
var store = (0, _redux.createStore)(_main["default"], preloadedState, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
(0, _reactDom.hydrate)(_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, _react["default"].createElement(_app["default"], null)), document.getElementById('app'));
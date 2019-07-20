"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _main = _interopRequireDefault(require("../reducers/main.js"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var store = (0, _redux.createStore)(_main["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"]));
var _default = store;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _store = _interopRequireDefault(require("./../store/store"));

var _QASearchBarContainer = _interopRequireDefault(require("./../containers/QASearchBarContainer"));

var _QAForumContainer = _interopRequireDefault(require("./../containers/QAForumContainer"));

var QA = function QA(props) {
  return _react["default"].createElement("div", null, console.log('WITHIN MAIN QA: (PROPS): ', props), _react["default"].createElement(_QASearchBarContainer["default"], null), _react["default"].createElement(_QAForumContainer["default"], null));
};

var _default = QA;
exports["default"] = _default;
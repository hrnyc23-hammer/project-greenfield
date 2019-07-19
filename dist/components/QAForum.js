"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _store = _interopRequireDefault(require("./../store/store"));

var _QAAnswersContainer = _interopRequireDefault(require("./../containers/QAAnswersContainer"));

var QAForum = function QAForum(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement("ul", null, props.qaResultsArr.map(function (result) {
    return _react["default"].createElement(_react["default"].Fragment, {
      key: Math.random()
    }, _react["default"].createElement("li", {
      key: Math.random()
    }, "Q: ", result.question_body), _react["default"].createElement(_QAAnswersContainer["default"], null));
  })), _react["default"].createElement("button", {
    onClick: function onClick() {
      console.log("hi");
    }
  }, "More Answered Questions"));
};

var _default = QAForum;
exports["default"] = _default;
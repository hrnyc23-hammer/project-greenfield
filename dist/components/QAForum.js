"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var QAForum = function QAForum(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement("ul", null, props.qaResultsArr.map(function (result, i) {
    return _react["default"].createElement(_react["default"].Fragment, {
      key: i
    }, _react["default"].createElement("p", {
      key: i
    }, "Q: ", result.question_body), _react["default"].createElement("ul", null, Object.values(result.answers).slice(0, result.answerLimit).map(function (answer, i) {
      return _react["default"].createElement("li", {
        key: i
      }, answer.body);
    })), _react["default"].createElement("button", {
      onClick: function onClick() {
        props.QAAddAnswers(i);
      }
    }, "load more answers"));
  })), _react["default"].createElement("button", {
    onClick: function onClick() {
      if (props.qaCount < props.qa.results.length) {
        props.QAIncrementer(1);
        props.QAChangeResultsArr(props.qaCount);
      }
    }
  }, "More Answered Questions"));
};

var _default = QAForum;
exports["default"] = _default;
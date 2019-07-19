"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var QASearchBar = function QASearchBar(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement("form", null, _react["default"].createElement("p", null, "Questions and Answers"), _react["default"].createElement("input", {
    onChange: function onChange(e) {
      props.QAHandleSearchEntry(e.target.value);
    },
    placeholder: "Have a Question? Search for answers...."
  }), _react["default"].createElement("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      console.log("search!");
    }
  }, "search")));
};

var _default = QASearchBar;
exports["default"] = _default;
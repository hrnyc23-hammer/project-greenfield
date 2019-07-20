"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var QASearchBar = function QASearchBar(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement("form", null, _react["default"].createElement("h3", null, "Questions and Answers"), _react["default"].createElement(_TextField["default"], {
    style: {
      margin: 8
    },
    fullWidth: true,
    margin: "normal",
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    onChange: function onChange(e) {
      props.QAHandleSearchEntry(e.target.value);
    },
    placeholder: "Have a Question? Search for answers...."
  }), _react["default"].createElement(_Fab["default"], {
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }, "Go!")));
};

var _default = QASearchBar;
exports["default"] = _default;
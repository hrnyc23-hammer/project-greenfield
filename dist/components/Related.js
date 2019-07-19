"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var Related = function Related(props) {
  (0, _react.useEffect)(function () {
    if (typeof props.related[0] === 'number') {
      props.load(props.related);
    }
  });
  return _react["default"].createElement("div", null, props.related.map(function (ele, idx) {
    return _react["default"].createElement("div", {
      key: idx
    }, "".concat(ele.name, " ").concat(ele.description));
  }));
};

var _default = Related;
exports["default"] = _default;
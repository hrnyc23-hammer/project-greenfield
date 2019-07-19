"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RelatedItem = _interopRequireDefault(require("./RelatedItem"));

var Related = function Related(props) {
  (0, _react.useEffect)(function () {
    if (typeof props.related[0] === 'number') {
      props.load(props.related);
    }
  });
  return _react["default"].createElement("div", null, props.related.map(function (item, idx) {
    return _react["default"].createElement(_RelatedItem["default"], {
      key: idx,
      item: item,
      currentItemInfo: props.info,
      handleRelatedClick: props.handleRelatedClick
    });
  }));
};

var _default = Related;
exports["default"] = _default;
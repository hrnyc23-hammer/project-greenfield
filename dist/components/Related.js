"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RelatedItem = _interopRequireDefault(require("./RelatedItem"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    }
  };
});

var Related = function Related(props) {
  var classes = useStyles();
  (0, _react.useEffect)(function () {
    if (typeof props.related[0] === 'number') {
      props.load(props.related);
    }
  });
  return _react["default"].createElement("div", null, _react["default"].createElement(_Grid["default"], {
    container: true,
    className: classes.root,
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
    spacing: 4
  }, props.related.map(function (item, idx) {
    return _react["default"].createElement(_Grid["default"], {
      item: true,
      key: idx
    }, _react["default"].createElement(_RelatedItem["default"], {
      item: item,
      currentItemInfo: props.info,
      handleRelatedClick: props.handleRelatedClick
    }));
  })));
};

var _default = Related;
exports["default"] = _default;
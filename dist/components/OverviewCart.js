"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _NativeSelect = _interopRequireDefault(require("@material-ui/core/NativeSelect"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var Cart = function Cart(_ref) {
  var props = _ref.props;
  var useStyles = (0, _styles.makeStyles)(function (theme) {
    return {
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120
      },
      button: {
        margin: theme.spacing(1)
      }
    };
  });
  var classes = useStyles();
  return _react["default"].createElement(_Grid["default"], {
    container: true
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, _react["default"].createElement(_FormControl["default"], {
    className: classes.formControl
  }, _react["default"].createElement(_InputLabel["default"], {
    htmlFor: "age-native-helper"
  }, "Size"), _react["default"].createElement(_NativeSelect["default"], {
    onChange: function onChange(e) {
      return props.handleSelectedSize(e.target.value);
    }
  }, _react["default"].createElement("option", {
    value: ""
  }), Object.keys(props.selectedStyle.skus).map(function (size) {
    return _react["default"].createElement("option", {
      key: size,
      value: size
    }, size);
  })))), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, _react["default"].createElement(_FormControl["default"], {
    className: classes.formControl
  }, _react["default"].createElement(_InputLabel["default"], {
    htmlFor: "age-native-helper"
  }, "Qty"), _react["default"].createElement(_NativeSelect["default"], null, _react["default"].createElement("option", {
    value: ""
  }), Array(Math.min(15, props.selectedStyle.skus[props.size] ? props.selectedStyle.skus[props.size] : 0)).fill(0).map(function (amt, i) {
    return _react["default"].createElement("option", {
      key: i,
      value: i + 1
    }, i + 1);
  })))));
};

var _default = Cart;
exports["default"] = _default;
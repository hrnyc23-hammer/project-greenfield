"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var ProductInfo = function ProductInfo(_ref) {
  var props = _ref.props;
  var useStyles = (0, _styles.makeStyles)(function (theme) {
    return {
      originalPrice: {
        textDecoration: "line-through"
      },
      salePrice: {
        color: "red"
      },
      saleHidden: {
        visibility: "hidden"
      }
    };
  });
  var classes = useStyles();
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Typography["default"], {
    variant: "h4",
    gutterBottom: true
  }, props.info.category), _react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "textSecondary",
    className: props.selectedStyle.sale_price > 0 ? classes.originalPrice : null
  }, "$", props.selectedStyle.original_price), _react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "textSecondary",
    className: props.selectedStyle.sale_price > 0 ? classes.salePrice : classes.saleHidden
  }, "$", props.selectedStyle.sale_price), _react["default"].createElement(_Typography["default"], {
    variant: "h5"
  }, props.selectedStyle.name));
};

var _default = ProductInfo;
exports["default"] = _default;
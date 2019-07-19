"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _GridList = _interopRequireDefault(require("@material-ui/core/GridList"));

var _GridListTile = _interopRequireDefault(require("@material-ui/core/GridListTile"));

var _GridListTileBar = _interopRequireDefault(require("@material-ui/core/GridListTileBar"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var Overview = function Overview(props) {
  var useStyles = (0, _styles.makeStyles)(function (theme) {
    return {
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        maxWidth: "100%"
      },
      image: {
        width: 300,
        height: 300,
        objectFit: "cover"
      },
      img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%"
      }
    };
  });
  var classes = useStyles();
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_Paper["default"], {
    className: classes.paper
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, _react["default"].createElement(_Grid["default"], {
    item: true
  }, _react["default"].createElement(_ButtonBase["default"], {
    className: classes.image
  }, _react["default"].createElement("img", {
    className: classes.img,
    alt: "complex",
    src: props.selectedStyle.photos[0].url
  }))), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: true,
    container: true
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: true,
    container: true,
    direction: "column",
    spacing: 2
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: true
  }, _react["default"].createElement(_Typography["default"], {
    gutterBottom: true,
    variant: "subtitle1"
  }, "REVIEWS GO HERE"), _react["default"].createElement(_Typography["default"], {
    variant: "body2",
    gutterBottom: true
  }, props.info.category), _react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "textSecondary"
  }, props.selectedStyle.sale_price > 0 ? "Sale Price : ".concat(props.selectedStyle.sale_price) : "Price : ".concat(props.selectedStyle.original_price))), _react["default"].createElement(_Grid["default"], null, props.styles.results.map(function (style) {
    return _react["default"].createElement("div", {
      key: style.style_id,
      onClick: function onClick() {
        return props.handleSelectedStyle(style);
      }
    }, style.name);
  })))))));
};

var _default = Overview;
exports["default"] = _default;
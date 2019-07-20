"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var _styles = require("@material-ui/core/styles");

var Carousel = function Carousel(_ref) {
  var props = _ref.props;
  var useStyles = (0, _styles.makeStyles)(function (theme) {
    return {
      image: {
        width: 450,
        height: 450,
        objectFit: "cover"
      },
      img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover"
      }
    };
  });
  var classes = useStyles();
  return _react["default"].createElement(_ButtonBase["default"], {
    className: classes.image
  }, console.log(props), _react["default"].createElement("img", {
    className: classes.img,
    src: props.selectedStyle.photos[0].url
  }));
};

var _default = Carousel;
exports["default"] = _default;
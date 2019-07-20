"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: 'none'
    }
  };
});

var ReviewsModal = function ReviewsModal(props) {
  var _useState = (0, _react.useState)(getModalStyle),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      modalStyle = _useState2[0];

  var classes = useStyles();
  return _react["default"].createElement(_Modal["default"], {
    open: props.open,
    onClose: props.handleClose
  }, _react["default"].createElement("div", {
    style: modalStyle,
    className: classes.paper
  }, _react["default"].createElement("p", null, "Modal")));
};

var _default = ReviewsModal;
exports["default"] = _default;
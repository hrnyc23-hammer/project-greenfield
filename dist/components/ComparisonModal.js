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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  var top = 50 + rand();
  var left = 50 + rand();
  return {
    top: "".concat(top, "%"),
    left: "".concat(left, "%"),
    transform: "translate(-".concat(top, "%, -").concat(left, "%)")
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

var makeComparison = function makeComparison(originalFeatures, compareToFeatures) {
  var obj = {};

  if (originalFeatures) {
    originalFeatures.forEach(function (feature) {
      obj[feature.feature] = {
        original: feature.value
      };
    });
  }

  if (compareToFeatures) {
    compareToFeatures.forEach(function (feature) {
      if (obj[feature.feature] !== undefined) {
        obj[feature.feature].compare = feature.value;
      } else {
        obj[feature.feature] = {
          compare: feature.value
        };
      }
    });
  }

  return obj;
};

var ComparisonModal = function ComparisonModal(props) {
  var _useState = (0, _react.useState)(getModalStyle),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      modalStyle = _useState2[0];

  var classes = useStyles();
  var comparison = makeComparison(props.currentInfo.features, props.compareInfo.features);
  return _react["default"].createElement(_Modal["default"], {
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    open: props.open,
    onClose: props.handleClose
  }, _react["default"].createElement("div", {
    style: modalStyle,
    className: classes.paper
  }, _react["default"].createElement("h5", {
    id: "modal-title"
  }, "Comparing"), _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", null, props.currentInfo.name), _react["default"].createElement("td", null, props.compareInfo.name)), Object.keys(comparison).map(function (feature, idx) {
    return _react["default"].createElement("tr", {
      key: idx
    }, _react["default"].createElement("td", null, comparison[feature].original), _react["default"].createElement("td", null, feature), _react["default"].createElement("td", null, comparison[feature].compare));
  })))));
};

var _default = ComparisonModal;
exports["default"] = _default;
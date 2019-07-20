"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReviewsStars = _interopRequireDefault(require("./ReviewsStars"));

var _OverviewSearch = _interopRequireDefault(require("./OverviewSearch"));

var _OverviewCarousel = _interopRequireDefault(require("./OverviewCarousel"));

var _OverviewProductInfo = _interopRequireDefault(require("./OverviewProductInfo"));

var _OverviewStyles = _interopRequireDefault(require("./OverviewStyles"));

var _OverviewCart = _interopRequireDefault(require("./OverviewCart"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

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
      slogan: {
        textAlign: "center"
      },
      button: {
        margin: theme.spacing(1)
      }
    };
  });
  var classes = useStyles();
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_OverviewSearch["default"], null), _react["default"].createElement(_Paper["default"], {
    className: classes.paper
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, _react["default"].createElement(_OverviewCarousel["default"], {
    props: props
  })), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 4,
    container: true,
    direction: "column"
  }, _react["default"].createElement(_Grid["default"], {
    item: true
  }, props.meta ? _react["default"].createElement(_ReviewsStars["default"], {
    meta: props.meta
  }) : null, _react["default"].createElement(_OverviewProductInfo["default"], {
    props: props
  })), _react["default"].createElement(_Grid["default"], {
    item: true
  }, _react["default"].createElement(_OverviewStyles["default"], {
    props: props
  })), _react["default"].createElement(_Grid["default"], {
    item: true
  }, _react["default"].createElement(_Grid["default"], {
    container: true
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, _react["default"].createElement(_OverviewCart["default"], {
    props: props
  })))), _react["default"].createElement(_Grid["default"], {
    container: true,
    justify: "center",
    alignItems: "stretch"
  }, _react["default"].createElement(_Button["default"], {
    variant: "contained",
    className: classes.button
  }, "Add to cart"))), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    className: classes.slogan
  }, _react["default"].createElement(_Typography["default"], {
    variant: "h5"
  }, props.info.slogan)), _react["default"].createElement(_Grid["default"], {
    container: true
  }))));
};

var _default = Overview;
exports["default"] = _default;
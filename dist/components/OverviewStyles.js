"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridList = _interopRequireDefault(require("@material-ui/core/GridList"));

var _GridListTile = _interopRequireDefault(require("@material-ui/core/GridListTile"));

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var Styles = function Styles(_ref) {
  var props = _ref.props;
  var useStyles = (0, _styles.makeStyles)(function (theme) {
    return {
      bigAvatar: {
        width: 65,
        height: 65
      },
      selectedStyle: {
        width: 65,
        height: 65,
        border: '3px solid lightGreen'
      },
      tile: {
        flexWrap: "wrap"
      }
    };
  });
  var classes = useStyles();
  return _react["default"].createElement(_GridList["default"], {
    className: classes.tile,
    cellHeight: 100,
    cols: 4
  }, props.styles.results.map(function (style) {
    return _react["default"].createElement(_GridListTile["default"], {
      key: style.style_id
    }, _react["default"].createElement(_ButtonBase["default"], {
      onClick: function onClick() {
        return props.handleSelectedStyle(style);
      }
    }, _react["default"].createElement(_Avatar["default"], {
      src: style.photos[0].thumbnail_url,
      className: style.style_id === props.selectedStyle.style_id ? classes.selectedStyle : classes.bigAvatar
    })));
  }));
};

var _default = Styles;
exports["default"] = _default;
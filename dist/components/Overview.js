"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReviewsStars = _interopRequireDefault(require("./ReviewsStars"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _GridList = _interopRequireDefault(require("@material-ui/core/GridList"));

var _GridListTile = _interopRequireDefault(require("@material-ui/core/GridListTile"));

var _GridListTileBar = _interopRequireDefault(require("@material-ui/core/GridListTileBar"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _NativeSelect = _interopRequireDefault(require("@material-ui/core/NativeSelect"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _OverviewSearch = _interopRequireDefault(require("./OverviewSearch"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

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
      },
      bigAvatar: {
        width: 70,
        height: 70
      },
      selectedStyle: {
        width: 70,
        height: 70,
        border: '5px solid lightGreen'
      },
      tile: {
        flexWrap: "wrap"
      },
      slogan: {
        textAlign: "center"
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      },
      button: {
        margin: theme.spacing(1)
      },
      badge: {
        margin: theme.spacing(2)
      },
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
  }, _react["default"].createElement(_ButtonBase["default"], {
    className: classes.image
  }, _react["default"].createElement("img", {
    className: classes.img,
    src: props.selectedStyle.photos[0].url
  }))), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 4,
    container: true,
    direction: "column",
    className: classes.rows
  }, _react["default"].createElement(_Grid["default"], {
    item: true
  }, _react["default"].createElement(_Typography["default"], {
    gutterBottom: true,
    variant: "subtitle1"
  }, props.meta ? _react["default"].createElement(_ReviewsStars["default"], {
    meta: props.meta
  }) : null), _react["default"].createElement(_Typography["default"], {
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
  }, props.selectedStyle.name)), _react["default"].createElement(_Grid["default"], {
    item: true
  }, _react["default"].createElement(_GridList["default"], {
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
  }))), _react["default"].createElement(_Grid["default"], {
    item: true
  }, _react["default"].createElement(_Grid["default"], {
    container: true
  }, _react["default"].createElement(_Grid["default"], {
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
  })))), _react["default"].createElement(_Grid["default"], {
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
  })))))), _react["default"].createElement(_Grid["default"], {
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
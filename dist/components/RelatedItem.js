"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ReviewsStars = _interopRequireDefault(require("./ReviewsStars"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ComparisonModal = _interopRequireDefault(require("./ComparisonModal"));

var RelatedItem = function RelatedItem(props) {
  var noImgAvailableURL = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  var imgSrc;
  var price;
  var defaultFound = false;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var toggleOpen = function toggleOpen() {
    open ? handleClose() : handleOpen();
  };

  for (var i = 0; i < props.item.styles ? props.item.styles.length : 0; i++) {
    var style = props.item.styles[i];

    if (style["default?"]) {
      defaultFound = true;
      price = parseInt(style.original_price) - parseInt(style.sale_price);
      imgSrc = style.photos[0].thumbnail_url;
      break;
    }
  }

  if (!defaultFound && props.item.styles !== undefined) {
    price = parseInt(props.item.styles[0].original_price) - parseInt(props.item.styles[0].sale_price);
    imgSrc = props.item.styles[0].photos[0].thumbnail_url;
  }

  imgSrc = imgSrc ? imgSrc : noImgAvailableURL;
  var useStyles = (0, _styles.makeStyles)({
    card: {
      width: 250
    },
    media: {
      height: 140
    }
  });
  var classes = useStyles();
  var itemUnavailable = "Information unavailable";
  return _react["default"].createElement(_Card["default"], {
    className: classes.card
  }, _react["default"].createElement(_CardActionArea["default"], {
    onClick: toggleOpen
  }, _react["default"].createElement(_CardMedia["default"], {
    className: classes.media,
    image: imgSrc,
    title: props.item.info ? props.item.info.name : itemUnavailable
  }), _react["default"].createElement(_CardContent["default"], null, _react["default"].createElement(_ComparisonModal["default"], {
    open: open,
    handleClose: handleClose,
    compareInfo: props.item.info ? props.item.info : {},
    currentInfo: props.currentItemInfo ? props.currentItemInfo : {}
  }), _react["default"].createElement(_Typography["default"], {
    variant: "subtitle2",
    color: "textSecondary",
    component: "p"
  }, props.item.info ? props.item.info.category : itemUnavailable), _react["default"].createElement(_Typography["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, props.item.info ? props.item.info.name : itemUnavailable), _react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "$", price), _react["default"].createElement(_ReviewsStars["default"], {
    meta: props.item.meta
  }))), _react["default"].createElement(_CardActions["default"], null));
};

var _default = RelatedItem;
exports["default"] = _default;
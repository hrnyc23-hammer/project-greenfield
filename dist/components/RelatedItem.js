"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReviewsStars = _interopRequireDefault(require("./ReviewsStars"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var RelatedItem = function RelatedItem(props) {
  var noImgAvailableURL = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  var imgSrc;
  var price;
  var defaultFound = false;

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
      maxWidth: 345
    },
    media: {
      height: 140
    }
  });
  var classes = useStyles();
  var itemUnavailable = "Information unavailable";
  return _react["default"].createElement(_Card["default"], {
    className: classes.card
  }, _react["default"].createElement(_CardActionArea["default"], null, _react["default"].createElement(_CardMedia["default"], {
    className: classes.media,
    image: imgSrc,
    title: props.item.info ? props.item.info.name : itemUnavailable
  }), _react["default"].createElement(_CardContent["default"], null, _react["default"].createElement(_Typography["default"], {
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
  }, "$", price), props.meta ? _react["default"].createElement(_ReviewsStars["default"], {
    meta: props.meta
  }) : null)), _react["default"].createElement(_CardActions["default"], null, _react["default"].createElement(_Button["default"], {
    size: "small",
    color: "primary"
  }, "Share"), _react["default"].createElement(_Button["default"], {
    size: "small",
    color: "primary"
  }, "Learn More")));
};

var _default = RelatedItem;
exports["default"] = _default;
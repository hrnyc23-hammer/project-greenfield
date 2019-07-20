"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ReviewsModal = _interopRequireDefault(require("./ReviewsModal"));

var ReviewList = function ReviewList(props) {
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

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("h4", null, props.reviews.results.length, " reviews, sorted by relevance"), _react["default"].createElement("div", null, props.reviews.results.map(function (review, index) {
    if ((props.barFilter.length === 0 || props.barFilter.includes(review.rating)) && index <= props.reviewsLength) {
      return _react["default"].createElement(_react["default"].Fragment, {
        key: review.review_id
      }, _react["default"].createElement("div", {
        style: {
          background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x',
          fontSize: '0',
          height: '21px',
          lineHeight: '0',
          overflow: 'hidden',
          textIndent: '-999em',
          width: '110px'
        }
      }, _react["default"].createElement("span", {
        style: {
          width: "".concat(review.rating * 20, "%"),
          background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x',
          backgroundPosition: '0 100%',
          "float": 'left',
          height: '21px',
          display: 'block'
        }
      })), _react["default"].createElement("div", null, _react["default"].createElement("span", {
        style: {
          fontSize: 'small',
          "float": 'right'
        }
      }, _react["default"].createElement("strong", null, review.reviewer_name), "   ", (0, _moment["default"])(review.date).format('ddd, MMM Do YYYY'))), _react["default"].createElement("h3", null, review.summary), _react["default"].createElement("p", null, review.body), review.photos.map(function (photo) {
        return _react["default"].createElement("img", {
          key: photo.id,
          style: {
            marginRight: '10px'
          },
          src: photo.url
        });
      }), review.recommend === 1 ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, _react["default"].createElement("strong", null, "\u2713"), " I recommend this product")) : null, review.response ? _react["default"].createElement("div", {
        style: {
          background: 'lightblue',
          padding: '10px 20px',
          borderRadius: '20px'
        }
      }, _react["default"].createElement("p", null, _react["default"].createElement("strong", null, "Response:")), _react["default"].createElement("p", null, review.response)) : null, _react["default"].createElement("br", null), _react["default"].createElement("span", {
        style: {
          fontSize: 'small'
        }
      }, "Was this review helpful?   "), _react["default"].createElement("span", {
        style: {
          fontSize: 'small',
          textDecoration: 'underline'
        }
      }, "Yes"), _react["default"].createElement("span", {
        style: {
          fontSize: 'small'
        }
      }, "(", review.helpfulness, ")"), _react["default"].createElement("span", {
        style: {
          fontSize: 'small',
          paddingLeft: '20px',
          paddingRight: '20px'
        }
      }, "|"), _react["default"].createElement("span", {
        style: {
          fontSize: 'small',
          textDecoration: 'underline'
        }
      }, "Report"), _react["default"].createElement("hr", null), _react["default"].createElement("br", null));
    } else {
      return null;
    }
  })), _react["default"].createElement("span", null, props.reviewsLength < props.reviews.results.length - 1 ? _react["default"].createElement(_Button["default"], {
    variant: "contained",
    style: {
      marginRight: '20px'
    },
    onClick: props.handleLengthChange
  }, "More Reviews") : null, _react["default"].createElement(_Button["default"], {
    variant: "contained",
    onClick: toggleOpen
  }, "Add A Review    +")), _react["default"].createElement(_ReviewsModal["default"], {
    open: open,
    handleClose: handleClose
  }));
};

var _default = ReviewList;
exports["default"] = _default;
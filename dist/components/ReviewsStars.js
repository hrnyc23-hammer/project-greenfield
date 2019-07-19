"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var ReviewsStars = function ReviewsStars(props) {
  var getRating = function getRating(meta) {
    var totalRatings = 0;
    var numberOfRatings = 0;

    for (var key in meta.ratings) {
      totalRatings = totalRatings + key * meta.ratings[key];
      numberOfRatings = numberOfRatings + meta.ratings[key];
    }

    var rating = (totalRatings / numberOfRatings).toFixed(1);
    return rating;
  };

  var rating = getRating(props.meta);
  var width = isNaN(rating) ? '0%' : (rating * 20).toString() + '%';
  return _react["default"].createElement("div", {
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
      width: width,
      background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x',
      backgroundPosition: '0 100%',
      "float": 'left',
      height: '21px',
      display: 'block'
    }
  }));
};

var _default = ReviewsStars;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var ReviewsRating = function ReviewsRating(props) {
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
  return _react["default"].createElement("span", {
    style: {
      fontSize: 'large',
      margin: '0px 10px 0px 0px',
      "float": 'left'
    }
  }, isNaN(rating) ? 0.0 : rating);
};

var _default = ReviewsRating;
exports["default"] = _default;
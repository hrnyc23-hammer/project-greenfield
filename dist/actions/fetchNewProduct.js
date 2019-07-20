"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _changeInfo = _interopRequireDefault(require("./changeInfo.js"));

var _changeStyles = _interopRequireDefault(require("./changeStyles.js"));

var _fetchNewRelated = _interopRequireDefault(require("./fetchNewRelated.js"));

var _changeQA = _interopRequireDefault(require("./changeQA.js"));

var _changeReviews = _interopRequireDefault(require("./changeReviews.js"));

var _changeMeta = _interopRequireDefault(require("./changeMeta.js"));

var _axios = _interopRequireDefault(require("axios"));

var fetchNewProduct = function fetchNewProduct(id) {
  return function (dispatch) {
    _axios["default"].get("/store/".concat(id)).then(function (_ref) {
      var data = _ref.data;
      var info = data.info,
          styles = data.styles,
          related = data.related,
          qa = data.qa,
          reviews = data.reviews,
          meta = data.meta;
      dispatch((0, _changeInfo["default"])(info));
      dispatch((0, _changeStyles["default"])(styles));
      dispatch((0, _fetchNewRelated["default"])(related));
      dispatch((0, _changeQA["default"])(qa));
      dispatch((0, _changeReviews["default"])(reviews));
      dispatch((0, _changeMeta["default"])(meta));
    })["catch"](function () {
      return console.error("Could not fetch product with id: ".concat(id));
    });
  };
};

var _default = fetchNewProduct;
exports["default"] = _default;
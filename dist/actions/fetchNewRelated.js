"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _changeRelated = _interopRequireDefault(require("./changeRelated.js"));

var apiUrl = 'http://18.222.40.124/';

var fetchNewRelated = function fetchNewRelated(relatedIds) {
  return function (dispatch) {
    Promise.all(relatedIds.map(function (id) {
      return _axios["default"].get("".concat(apiUrl, "products/").concat(id)).then(function (idResponse) {
        var relatedResult = {
          info: idResponse.data
        };
        return _axios["default"].get("".concat(apiUrl, "products/").concat(id, "/styles")).then(function (styleResponse) {
          var styleResult = {
            styles: styleResponse.data.results
          };
          return _axios["default"].get("".concat(apiUrl, "reviews/").concat(id, "/meta")).then(function (metaResponse) {
            var metaResult = {
              meta: metaResponse.data
            };
            return Object.assign({}, relatedResult, styleResult, metaResult);
          });
        });
      });
    })).then(function (response) {
      dispatch((0, _changeRelated["default"])(response));
    })["catch"](function () {
      console.error('Could not fetch related items');
    });
  };
};

var _default = fetchNewRelated;
exports["default"] = _default;
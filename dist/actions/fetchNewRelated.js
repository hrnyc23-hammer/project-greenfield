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
      return _axios["default"].get("".concat(apiUrl, "products/").concat(id)).then(function (_ref) {
        var data = _ref.data;
        return data;
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
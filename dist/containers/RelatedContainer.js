"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _Related = _interopRequireDefault(require("../components/Related"));

var _fetchNewProduct = _interopRequireDefault(require("../actions/fetchNewProduct"));

var _fetchNewRelated = _interopRequireDefault(require("../actions/fetchNewRelated"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    related: store.related
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleRelatedClick: function handleRelatedClick(id) {
      dispatch((0, _fetchNewProduct["default"])(id));
    },
    load: function load(ids) {
      dispatch((0, _fetchNewRelated["default"])(ids));
    }
  };
};

var RelatedContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Related["default"]);
var _default = RelatedContainer;
exports["default"] = _default;
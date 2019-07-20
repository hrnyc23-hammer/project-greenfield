"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _Outfits = _interopRequireDefault(require("../components/Outfits"));

var _addToOutfits2 = _interopRequireDefault(require("../actions/addToOutfits"));

var _removeFromOutfits2 = _interopRequireDefault(require("../actions/removeFromOutfits"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    info: store.overviewProductInfo,
    styles: store.overviewChangeStyles,
    meta: store.meta,
    outfits: store.outfits
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToOutfits: function addToOutfits(outfit) {
      dispatch((0, _addToOutfits2["default"])(outfit));
    },
    removeFromOutfits: function removeFromOutfits(outfit) {
      dispatch((0, _removeFromOutfits2["default"])(outfit));
    }
  };
};

var OutfitsContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Outfits["default"]);
var _default = OutfitsContainer;
exports["default"] = _default;
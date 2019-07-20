"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var addToOutfits = function addToOutfits(outfits) {
  return {
    type: 'ADD_TO_OUTFITS',
    outfits: outfits
  };
};

var _default = addToOutfits;
exports["default"] = _default;
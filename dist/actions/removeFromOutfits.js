"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var removeFromOutfits = function removeFromOutfits(outfitId) {
  return {
    type: 'REMOVE_FROM_OUTFITS',
    outfitId: outfitId
  };
};

var _default = removeFromOutfits;
exports["default"] = _default;
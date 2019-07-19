"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var QAIncrementer = function QAIncrementer(entry) {
  return {
    type: "QA_INCREMENT_BY_ENTRY",
    entry: entry
  };
};

var _default = QAIncrementer;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _redux = _interopRequireDefault(require("redux"));

var _sampleItemData = require("../data/sampleItemData.js");

var QAChangeResultsArrReducer = function QAChangeResultsArrReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _sampleItemData.qa.results.slice(0, 2);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CHANGE_RESULTS_ARRAY":
      var temp = JSON.parse(JSON.stringify(_sampleItemData.qa.results[action.entry]));
      temp.answerLimit = 2;
      return [].concat((0, _toConsumableArray2["default"])(state), [temp]);

    case "ADD_ANSWERS":
      var questions = (0, _toConsumableArray2["default"])(state);
      questions[action.index].answerLimit += 2;
      return questions;

    default:
      if (state[0].answerLimit === undefined) {
        return state.map(function (ele) {
          ele.answerLimit = 2;
          return ele;
        });
      } else {
        return state;
      }

  }
};

var _default = QAChangeResultsArrReducer;
exports["default"] = _default;
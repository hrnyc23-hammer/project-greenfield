"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _redux = _interopRequireDefault(require("redux"));

var QAChangeResultsArrReducer = function QAChangeResultsArrReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var temp;
  var questions;

  switch (action.type) {
    case "CHANGE_RESULTS_ARRAY":
      temp = JSON.parse(JSON.stringify(state[action.entry]));
      temp.answerLimit = 2;
      return [].concat((0, _toConsumableArray2["default"])(state), [temp]);

    case "ADD_ANSWERS":
      questions = (0, _toConsumableArray2["default"])(state);
      questions[action.index].answerLimit += 2;
      return questions;

    default:
      if (state.length > 0 && state[0].answerLimit === undefined) {
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
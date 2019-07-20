"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _QAForum = _interopRequireDefault(require("./../components/QAForum"));

var _QAChangeResultsArr2 = _interopRequireDefault(require("./../actions/QAChangeResultsArr"));

var _QAIncrementer2 = _interopRequireDefault(require("./../actions/QAIncrementer"));

var _QAAddAnswers2 = _interopRequireDefault(require("./../actions/QAAddAnswers"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    qa: state.qa,
    qaResultsArr: state.qaResultsArr,
    qaCount: state.qaIncrementer,
    qaAnswersArr: state.qaSendDataToStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    QAChangeResultsArr: function QAChangeResultsArr(entry) {
      dispatch((0, _QAChangeResultsArr2["default"])(entry));
    },
    QAIncrementer: function QAIncrementer(entry) {
      dispatch((0, _QAIncrementer2["default"])(entry));
    },
    QAAddAnswers: function QAAddAnswers(index) {
      dispatch((0, _QAAddAnswers2["default"])(index));
    }
  };
};

var QAForumContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_QAForum["default"]);
var _default = QAForumContainer;
exports["default"] = _default;
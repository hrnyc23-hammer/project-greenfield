"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _QAAnswers = _interopRequireDefault(require("./../components/QAAnswers"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    qa: state.qa,
    QASearchEntry: state.QASearchEntry
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var QAAnswersContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_QAAnswers["default"]);
var _default = QAAnswersContainer;
exports["default"] = _default;
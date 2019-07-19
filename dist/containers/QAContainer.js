"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _QA = _interopRequireDefault(require("./../components/QA"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    qa: state.qa,
    initialState: state // QASearchEntry: state.QASearchEntry

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var QAContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_QA["default"]);
var _default = QAContainer;
exports["default"] = _default;
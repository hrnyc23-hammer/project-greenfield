"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _QAForum = _interopRequireDefault(require("./../components/QAForum"));

var _sampleItemData = _interopRequireDefault(require("../data/sampleItemData"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    qa: state.qa,
    qaResultsArr: state.qa.results
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var QAForumContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_QAForum["default"]);
var _default = QAForumContainer;
exports["default"] = _default;
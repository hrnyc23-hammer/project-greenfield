"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _QASearchBar = _interopRequireDefault(require("./../components/QASearchBar"));

var _sampleItemData = _interopRequireDefault(require("../data/sampleItemData"));

var _QAHandleSearchEntry2 = _interopRequireDefault(require("./../actions/QAHandleSearchEntry"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    qa: state.qa,
    QASearchEntry: state.QASearchEntry
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    QAHandleSearchEntry: function QAHandleSearchEntry(entry) {
      dispatch((0, _QAHandleSearchEntry2["default"])(entry));
    }
  };
};

var QASearchBarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_QASearchBar["default"]);
var _default = QASearchBarContainer;
exports["default"] = _default;
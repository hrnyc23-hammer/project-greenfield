"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var QAForum = function QAForum(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement("ul", null, props.qaResultsArr.sort(function (a, b) {
    return a.helpfulness < b.helpfulness ? 1 : b.helpfulness < a.helpfulness ? -1 : 0;
  }).map(function (question, i) {
    return _react["default"].createElement(_react["default"].Fragment, {
      key: Math.random()
    }, _react["default"].createElement("strong", null, _react["default"].createElement("span", {
      key: Math.random(),
      style: {
        fontSize: "large",
        padding: "0px 0px 0px 55px"
      }
    }, "Q: ", question.question_body)), _react["default"].createElement("span", {
      style: {
        fontSize: "small",
        "float": "right",
        textDecoration: "underline"
      }
    }, "Add Answer"), _react["default"].createElement("span", {
      style: {
        fontSize: "small",
        paddingLeft: "20px",
        paddingRight: "20px",
        "float": "right"
      }
    }, "|"), _react["default"].createElement("span", {
      style: {
        fontSize: "small",
        "float": "right",
        paddingLeft: "5px"
      }
    }, " ", "(", question.question_helpfulness, ")", " "), _react["default"].createElement("span", {
      style: {
        fontSize: "small",
        "float": "right",
        textDecoration: "underline",
        paddingLeft: "5px"
      }
    }, " ", "Yes", " "), _react["default"].createElement("span", {
      style: {
        fontSize: "small",
        "float": "right"
      }
    }, " ", "helpful?", " "), _react["default"].createElement("ul", null, Object.values(question.answers).sort(function (a, b) {
      return a.helpfulness < b.helpfulness ? 1 : b.helpfulness < a.helpfulness ? -1 : 0;
    }).slice(0, question.answerLimit).map(function (answer) {
      return _react["default"].createElement(_List["default"], {
        key: Math.random()
      }, _react["default"].createElement(_ListItem["default"], {
        alignItems: "flex-start",
        key: Math.random()
      }, _react["default"].createElement("p", {
        key: Math.random()
      }, "A: ", answer.body)), _react["default"].createElement(_ListItem["default"], {
        key: Math.random()
      }, answer.photos.map(function (photo) {
        return _react["default"].createElement("img", {
          onClick: function onClick() {},
          src: photo,
          width: "100",
          height: "60",
          key: Math.random()
        });
      })), _react["default"].createElement(_ListItem["default"], {
        key: Math.random()
      }, _react["default"].createElement("span", {
        key: Math.random(),
        style: {
          fontSize: "small",
          spanadding: "0px 0px 0px 0px",
          paddingRight: "5px"
        }
      }, "by: ", answer.answerer_name, " | date:", " ", answer.date.split("T")[0], " | Helpful?"), _react["default"].createElement("span", {
        style: {
          fontSize: "small",
          textDecoration: "underline",
          paddingRight: "5px"
        }
      }, "Yes"), _react["default"].createElement("span", {
        style: {
          fontSize: "small",
          spanadding: "0px 0px 0px 0px"
        }
      }, "(", answer.helpfulness, ")"), _react["default"].createElement("span", {
        style: {
          fontSize: "small",
          paddingLeft: "20px",
          paddingRight: "20px"
        }
      }, "|"), _react["default"].createElement("span", {
        style: {
          fontSize: "small",
          textDecoration: "underline"
        }
      }, "Report")), _react["default"].createElement(_Divider["default"], null));
    })), question.answerLimit >= Object.keys(question.answers).length ? _react["default"].createElement("div", null) : _react["default"].createElement(_Button["default"], {
      size: "small",
      style: {
        marginRight: "20px"
      },
      onClick: function onClick() {
        props.QAAddAnswers(i);
      }
    }, "load more answers"), _react["default"].createElement("br", null), _react["default"].createElement("br", null));
  })), _react["default"].createElement(_Button["default"], {
    variant: "contained",
    size: "large",
    onClick: function onClick() {
      if (props.qaCount < props.qa.length) {
        props.QAIncrementer(1);
        props.QAChangeResultsArr(props.qaCount);
      }
    }
  }, "More Answered Questions"));
};

var _default = QAForum;
exports["default"] = _default;
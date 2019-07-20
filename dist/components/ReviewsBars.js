"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var ReviewsBars = function ReviewsBars(props) {
  var totalStars = 0;

  for (var key in props.meta.ratings) {
    totalStars = totalStars + props.meta.ratings[key];
  }

  var fiveStars = props.meta.ratings[5] || 0;
  var fourStars = props.meta.ratings[4] || 0;
  var threeStars = props.meta.ratings[3] || 0;
  var twoStars = props.meta.ratings[2] || 0;
  var oneStars = props.meta.ratings[1] || 0;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, _react["default"].createElement("span", {
    onClick: function onClick() {
      props.handleBarFilterChange(5);
    },
    style: {
      textDecoration: 'underline',
      "float": 'left'
    }
  }, "5 stars"), _react["default"].createElement("div", {
    style: {
      "float": 'left',
      marginTop: '5px',
      marginLeft: '10px',
      position: 'relative',
      height: '10px',
      width: '200px',
      background: 'grey'
    }
  }, _react["default"].createElement("div", {
    style: {
      width: "".concat(fiveStars / totalStars * 100, "%"),
      background: 'green',
      height: '100%'
    }
  }))), _react["default"].createElement("br", null), _react["default"].createElement("div", null, _react["default"].createElement("span", {
    onClick: function onClick() {
      props.handleBarFilterChange(4);
    },
    style: {
      textDecoration: 'underline',
      "float": 'left'
    }
  }, "4 stars"), _react["default"].createElement("div", {
    style: {
      "float": 'left',
      marginTop: '5px',
      marginLeft: '10px',
      position: 'relative',
      height: '10px',
      width: '200px',
      background: 'grey'
    }
  }, _react["default"].createElement("div", {
    style: {
      width: "".concat(fourStars / totalStars * 100, "%"),
      background: 'green',
      height: '100%'
    }
  }))), _react["default"].createElement("br", null), _react["default"].createElement("div", null, _react["default"].createElement("span", {
    onClick: function onClick() {
      props.handleBarFilterChange(3);
    },
    style: {
      textDecoration: 'underline',
      "float": 'left'
    }
  }, "3 stars"), _react["default"].createElement("div", {
    style: {
      "float": 'left',
      marginTop: '5px',
      marginLeft: '10px',
      position: 'relative',
      height: '10px',
      width: '200px',
      background: 'grey'
    }
  }, _react["default"].createElement("div", {
    style: {
      width: "".concat(threeStars / totalStars * 100, "%"),
      background: 'green',
      height: '100%'
    }
  }))), _react["default"].createElement("br", null), _react["default"].createElement("div", null, _react["default"].createElement("span", {
    onClick: function onClick() {
      props.handleBarFilterChange(2);
    },
    style: {
      textDecoration: 'underline',
      "float": 'left'
    }
  }, "2 stars"), _react["default"].createElement("div", {
    style: {
      "float": 'left',
      marginTop: '5px',
      marginLeft: '10px',
      position: 'relative',
      height: '10px',
      width: '200px',
      background: 'grey'
    }
  }, _react["default"].createElement("div", {
    style: {
      width: "".concat(twoStars / totalStars * 100, "%"),
      background: 'green',
      height: '100%'
    }
  }))), _react["default"].createElement("br", null), _react["default"].createElement("div", null, _react["default"].createElement("span", {
    onClick: function onClick() {
      props.handleBarFilterChange(1);
    },
    style: {
      textDecoration: 'underline',
      "float": 'left'
    }
  }, "1 star"), _react["default"].createElement("div", {
    style: {
      "float": 'left',
      marginTop: '5px',
      marginLeft: '16px',
      position: 'relative',
      height: '10px',
      width: '200px',
      background: 'grey'
    }
  }, _react["default"].createElement("div", {
    style: {
      width: "".concat(oneStars / totalStars * 100, "%"),
      background: 'green',
      height: '100%'
    }
  }))), _react["default"].createElement("br", null), _react["default"].createElement("div", null, props.barFilter.length > 0 ? _react["default"].createElement("div", null, _react["default"].createElement("span", null, "Filtered by stars:", _react["default"].createElement("span", null, props.barFilter.map(function (star, index) {
    if (index !== props.barFilter.length - 1) {
      return _react["default"].createElement("span", {
        key: index
      }, " ", _react["default"].createElement("strong", null, star, ","));
    } else {
      return _react["default"].createElement("span", {
        key: index
      }, " ", _react["default"].createElement("strong", null, star));
    }
  })), _react["default"].createElement("br", null), _react["default"].createElement(_Button["default"], {
    variant: "contained",
    size: "small",
    onClick: props.handleBarFilterReset
  }, "Reset Filter"))) : _react["default"].createElement("div", {
    style: {
      visibility: 'hidden'
    }
  }, _react["default"].createElement("span", null, "Filtered by stars:", _react["default"].createElement("br", null), _react["default"].createElement(_Button["default"], {
    variant: "contained",
    size: "small",
    onClick: props.handleBarFilterReset
  }, "Reset Filter")))), props.meta.characteristics.Comfort ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "Comfort"), _react["default"].createElement("div", {
    style: {
      "float": 'left',
      position: 'relative',
      height: '10px',
      width: '235px',
      background: 'lightgrey'
    }
  }, _react["default"].createElement("div", {
    style: {
      fontSize: 'x-small',
      position: 'relative',
      marginLeft: "".concat(props.meta.characteristics.Comfort * 46, "px"),
      marginBottom: '10px'
    }
  }, "\u25BC")), _react["default"].createElement("br", null), _react["default"].createElement("p", {
    style: {
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Poor"), _react["default"].createElement("p", {
    style: {
      marginLeft: '185px',
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Perfect")) : null, _react["default"].createElement("br", null), _react["default"].createElement("br", null), props.meta.characteristics.Fit ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "Fit"), _react["default"].createElement("div", {
    style: {
      "float": 'left',
      position: 'relative',
      height: '10px',
      width: '235px',
      background: 'lightgrey'
    }
  }, _react["default"].createElement("div", {
    style: {
      fontSize: 'x-small',
      position: 'relative',
      marginLeft: "".concat(props.meta.characteristics.Fit * 46, "px"),
      marginBottom: '10px'
    }
  }, "\u25BC")), _react["default"].createElement("br", null), _react["default"].createElement("p", {
    style: {
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Too Small"), _react["default"].createElement("p", {
    style: {
      marginLeft: '63px',
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Perfect"), _react["default"].createElement("p", {
    style: {
      marginLeft: '68px',
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Too Big")) : null, _react["default"].createElement("br", null), _react["default"].createElement("br", null), props.meta.characteristics.Length ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "Length"), _react["default"].createElement("div", {
    style: {
      "float": 'left',
      position: 'relative',
      height: '10px',
      width: '235px',
      background: 'lightgrey'
    }
  }, _react["default"].createElement("div", {
    style: {
      fontSize: 'x-small',
      position: 'relative',
      marginLeft: "".concat(props.meta.characteristics.Length * 46, "px"),
      marginBottom: '10px'
    }
  }, "\u25BC")), _react["default"].createElement("br", null), _react["default"].createElement("p", {
    style: {
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Too Short"), _react["default"].createElement("p", {
    style: {
      marginLeft: '63px',
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Perfect"), _react["default"].createElement("p", {
    style: {
      marginLeft: '64px',
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Too Long")) : null, _react["default"].createElement("br", null), _react["default"].createElement("br", null), props.meta.characteristics.Quality ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "Quality"), _react["default"].createElement("div", {
    style: {
      "float": 'left',
      position: 'relative',
      height: '10px',
      width: '235px',
      background: 'lightgrey'
    }
  }, _react["default"].createElement("div", {
    style: {
      fontSize: 'x-small',
      position: 'relative',
      marginLeft: "".concat(props.meta.characteristics.Quality * 46, "px"),
      marginBottom: '10px'
    }
  }, "\u25BC")), _react["default"].createElement("br", null), _react["default"].createElement("p", {
    style: {
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Poor"), _react["default"].createElement("p", {
    style: {
      marginLeft: '185px',
      "float": 'left',
      fontSize: 'x-small'
    }
  }, "Perfect")) : null);
};

var _default = ReviewsBars;
exports["default"] = _default;
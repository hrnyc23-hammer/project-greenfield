"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _OutfitItem = _interopRequireDefault(require("./OutfitItem"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    }
  };
});

var Outfits = function Outfits(props) {
  var classes = useStyles();
  var outfits = {};
  (0, _react.useEffect)(function () {
    outfits = JSON.parse(localStorage.getItem("greenfieldOutfits"));
    outfits = outfits === null ? {} : outfits;

    for (var outfit in outfits) {
      if (JSON.stringify(outfits[outfit]) !== JSON.stringify(props.outfits[outfit])) {
        props.addToOutfits(outfits);
      }
    }
  });

  var addOutfit = function addOutfit(event) {
    event.preventDefault();

    if (outfits[props.info.id] === undefined) {
      var outfitPackage = {
        info: props.info,
        styles: props.styles.results,
        meta: props.meta
      };
      outfits[props.info.id] = outfitPackage;
      localStorage.setItem("greenfieldOutfits", JSON.stringify(outfits));
      props.addToOutfits(outfits);
    }
  };

  return _react["default"].createElement(_Grid["default"], {
    container: true,
    className: classes.root,
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
    spacing: 4
  }, _react["default"].createElement(_Grid["default"], {
    item: true
  }, _react["default"].createElement(_Fab["default"], {
    onClick: function onClick(e) {
      return addOutfit(e);
    }
  }, "+")), Object.keys(props.outfits).map(function (ele, idx) {
    return _react["default"].createElement(_Grid["default"], {
      item: true,
      key: idx
    }, _react["default"].createElement(_OutfitItem["default"], {
      item: props.outfits[ele],
      removeFromOutfits: props.removeFromOutfits
    }));
  }));
};

var _default = Outfits;
exports["default"] = _default;
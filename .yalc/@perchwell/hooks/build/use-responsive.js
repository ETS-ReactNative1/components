"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _styles = require("@material-ui/core/styles");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _utils = require("@perchwell/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Returns the last element of the list which matches the predicate,
// or `undefined` if no element matches.
var findLast = function findLast(fn, list) {
  var idx = list.length - 1;

  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }

    idx -= 1;
  }
};

var useResponsive = function useResponsive(responsiveValues) {
  var theme = (0, _styles.useTheme)();
  var isXs = (0, _useMediaQuery["default"])(theme.breakpoints.up('xs'), {
    defaultMatches: true
  });
  var isSm = (0, _useMediaQuery["default"])(theme.breakpoints.up('sm'));
  var isMd = (0, _useMediaQuery["default"])(theme.breakpoints.up('md'));
  var isLg = (0, _useMediaQuery["default"])(theme.breakpoints.up('lg'));
  var isXl = (0, _useMediaQuery["default"])(theme.breakpoints.up('xl'));
  var matches = (0, _react.useMemo)(function () {
    return {
      xs: isXs,
      sm: isSm,
      md: isMd,
      lg: isLg,
      xl: isXl
    };
  }, [isXs, isSm, isMd, isLg, isXl]);
  var matchValue = (0, _react.useMemo)(function () {
    var match = findLast(function (breakpoint) {
      return matches[breakpoint] && !(0, _utils.isNil)(responsiveValues[breakpoint]);
    }, theme.breakpoints.keys);
    return match && responsiveValues[match];
  }, [matches, responsiveValues, theme.breakpoints.keys]);
  return matchValue;
};

var _default = useResponsive;
exports["default"] = _default;
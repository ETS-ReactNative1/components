"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getFormattedNumber(number) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$startAdornme = options.startAdornment,
      startAdornment = _options$startAdornme === void 0 ? '' : _options$startAdornme,
      _options$endAdornment = options.endAdornment,
      endAdornment = _options$endAdornment === void 0 ? '' : _options$endAdornment,
      _options$locale = options.locale,
      locale = _options$locale === void 0 ? 'en-US' : _options$locale;
  return typeof number === 'number' ? "".concat(startAdornment).concat(number.toLocaleString(locale)).concat(endAdornment) : null;
}

var _default = getFormattedNumber;
exports["default"] = _default;
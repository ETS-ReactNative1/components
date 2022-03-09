"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatRangeValue = formatRangeValue;
exports.getRangeValue = getRangeValue;
exports.hasRangeError = hasRangeError;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function isNil(value) {
  return value === null || value === undefined;
}

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

function formatRangeValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isNil(value) || value === '') {
    return '';
  }

  if (String(value).includes('.')) {
    var _String$split = String(value).split('.'),
        _String$split2 = _slicedToArray(_String$split, 2),
        beforeDot = _String$split2[0],
        afterDot = _String$split2[1];

    return "".concat(getFormattedNumber(Number(beforeDot)), ".").concat(afterDot);
  }

  return getFormattedNumber(Number(value));
}

function getRangeValue(_ref) {
  var min = _ref.min,
      max = _ref.max,
      config = _ref.config;

  if (!isNil(min) && !isNil(max)) {
    var _config$both, _config$both2, _config$both$endAdorn, _config$both3;

    var formattedMin = getFormattedNumber(min, config === null || config === void 0 ? void 0 : (_config$both = config.both) === null || _config$both === void 0 ? void 0 : _config$both.min);
    var formattedMax = getFormattedNumber(max, config === null || config === void 0 ? void 0 : (_config$both2 = config.both) === null || _config$both2 === void 0 ? void 0 : _config$both2.max);
    var endAdornment = (_config$both$endAdorn = config === null || config === void 0 ? void 0 : (_config$both3 = config.both) === null || _config$both3 === void 0 ? void 0 : _config$both3.endAdornment) !== null && _config$both$endAdorn !== void 0 ? _config$both$endAdorn : '';
    return min === max ? "".concat(formattedMin).concat(endAdornment) : "".concat(formattedMin, " - ").concat(formattedMax).concat(endAdornment);
  }

  if (!isNil(min)) {
    var _config$min;

    var _ref2 = (_config$min = config === null || config === void 0 ? void 0 : config.min) !== null && _config$min !== void 0 ? _config$min : {},
        _ref2$startAdornment = _ref2.startAdornment,
        startAdornment = _ref2$startAdornment === void 0 ? '' : _ref2$startAdornment,
        _ref2$endAdornment = _ref2.endAdornment,
        _endAdornment = _ref2$endAdornment === void 0 ? '' : _ref2$endAdornment;

    return getFormattedNumber(min, {
      startAdornment: startAdornment,
      endAdornment: _endAdornment
    });
  }

  if (!isNil(max)) {
    var _config$max;

    var _ref3 = (_config$max = config === null || config === void 0 ? void 0 : config.max) !== null && _config$max !== void 0 ? _config$max : {},
        _ref3$startAdornment = _ref3.startAdornment,
        _startAdornment = _ref3$startAdornment === void 0 ? '' : _ref3$startAdornment,
        _ref3$endAdornment = _ref3.endAdornment,
        _endAdornment2 = _ref3$endAdornment === void 0 ? '' : _ref3$endAdornment;

    return getFormattedNumber(max, {
      startAdornment: _startAdornment,
      endAdornment: _endAdornment2
    });
  }

  return '';
}

function hasRangeError(_ref4) {
  var min = _ref4.min,
      max = _ref4.max;
  return !isNil(min) && !isNil(max) && Number(min) > Number(max) || !isNil(max) && max > 500000000;
}
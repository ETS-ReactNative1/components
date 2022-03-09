"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOptionChecked = isOptionChecked;
exports.getOptionData = getOptionData;
exports.isValidTypeFilter = isValidTypeFilter;

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isOptionChecked(option, filters) {
  var _filters$option$filte, _filters$option$filte2;

  return !!((_filters$option$filte = filters === null || filters === void 0 ? void 0 : (_filters$option$filte2 = filters[option.filter_group_id]) === null || _filters$option$filte2 === void 0 ? void 0 : _filters$option$filte2.rules) !== null && _filters$option$filte !== void 0 ? _filters$option$filte : []).find(function (rule) {
    return (0, _isEqual["default"])(rule, option.rule);
  });
}

function getOptionData(option) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _filter$labels = filter.labels,
      labels = _filter$labels === void 0 ? [] : _filter$labels,
      _filter$rules = filter.rules,
      rules = _filter$rules === void 0 ? [] : _filter$rules,
      _filter$value = filter.value,
      value = _filter$value === void 0 ? [] : _filter$value;
  var isOptionExists = rules.find(function (rule) {
    return (0, _isEqual["default"])(rule, option.rule);
  });
  var commonData = {
    key: option.filter_group_id,
    type: option.type
  };

  if (isOptionExists) {
    return _objectSpread(_objectSpread({}, commonData), {}, {
      labels: labels.filter(function (label) {
        return label !== option.name;
      }),
      rules: rules.filter(function (rule) {
        return !(0, _isEqual["default"])(rule, option.rule);
      }),
      value: value.filter(function (value) {
        return !(0, _isEqual["default"])(value, option.value);
      })
    });
  }

  return _objectSpread(_objectSpread({}, commonData), {}, {
    labels: [].concat(_toConsumableArray(labels), [option.name]),
    rules: [].concat(_toConsumableArray(rules), [option.rule]),
    value: [].concat(_toConsumableArray(value), [option.value])
  });
}

var hasLabels = function hasLabels(filter) {
  var _filter$labels2;

  return ((_filter$labels2 = filter === null || filter === void 0 ? void 0 : filter.labels) !== null && _filter$labels2 !== void 0 ? _filter$labels2 : []).length > 0;
};

function isValidTypeFilter(filter) {
  var validKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isValidKey = false;

  var _iterator = _createForOfIteratorHelper(validKeys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if ((filter === null || filter === void 0 ? void 0 : filter.key) === key) {
        isValidKey = true;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (!isValidKey) return false;
  return hasLabels(filter);
}
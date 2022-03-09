"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapArrayToObject = function mapArrayToObject(array) {
  return array ? array.reduce(function (result, element) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, element.id, _objectSpread({}, element)));
  }, {}) : {};
};

var isArrayOfObjects = function isArrayOfObjects(array) {
  return Array.isArray(array) && array.length > 0 && array.every(function (element) {
    return Object.prototype.toString.call(element) === '[object Object]';
  });
};

var normalizeObject = function normalizeObject(object) {
  return Object.keys(object).reduce(function (res, key) {
    return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, key, normalizeData(object[key])));
  }, {});
};

var normalizeData = function normalizeData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(data).reduce(function (res, key) {
    // eslint-disable-next-line no-prototype-builtins
    if (isArrayOfObjects(data[key]) && data[key][0].hasOwnProperty('id')) {
      return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, key, normalizeObject(mapArrayToObject(data[key]))));
    }

    return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, key, data[key]));
  }, data);
};

var _default = normalizeData;
exports["default"] = _default;
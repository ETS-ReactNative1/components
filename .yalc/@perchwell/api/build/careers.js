"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCareers = getCareers;
exports.getCareer = getCareer;
exports.sendResume = sendResume;
exports.sendDocument = sendDocument;

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getCareers(api, query) {
  return api("/careers?".concat(_querystring["default"].stringify(query)));
}

function getCareer(api, id) {
  return api("/career/".concat(id));
}

function sendResume(api, data, config) {
  return api('/career_applications.json', _objectSpread({
    data: data
  }, config));
}

function sendDocument(api, data, config) {
  return api('/document', _objectSpread({
    data: data
  }, config));
}
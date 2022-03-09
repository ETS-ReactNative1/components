"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPublications = getPublications;
exports.getPublication = getPublication;

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPublications(api, query) {
  return api("/publications?".concat(_querystring["default"].stringify(query)));
}

function getPublication(api, id, query) {
  return api("/publication/".concat(id, "?").concat(_querystring["default"].stringify(query)));
}
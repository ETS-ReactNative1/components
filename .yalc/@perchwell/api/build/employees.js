"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmployees = getEmployees;

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getEmployees(api, query) {
  return api("/employees?".concat(_querystring["default"].stringify(query)));
}
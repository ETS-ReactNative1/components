"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBuildings = getBuildings;
exports.getBuilding = getBuilding;

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getBuildings(api, query) {
  return api("/buildings?".concat(_querystring["default"].stringify(query)));
}

function getBuilding(api, id) {
  return api("/buildings/".concat(id));
}
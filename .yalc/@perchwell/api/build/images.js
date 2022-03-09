"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImages = getImages;

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getImages(api, query) {
  return api("/image_collections?".concat(_querystring["default"].stringify(query)));
}
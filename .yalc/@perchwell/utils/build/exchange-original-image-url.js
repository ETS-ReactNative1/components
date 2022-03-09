"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function exchangeOriginalImageUrl(url) {
  if (!url) {
    return '';
  }

  var newURL = _typeof(url) === 'object' ? url.content_url : url;
  return newURL.replace('/original/', '/xlarge/');
}

var _default = exchangeOriginalImageUrl;
exports["default"] = _default;
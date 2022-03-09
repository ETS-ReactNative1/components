"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isVerticalScroll = void 0;

var isVerticalScroll = function isVerticalScroll(x, y) {
  var absoluteX = Math.abs(x);
  var absoluteY = Math.abs(y);
  return absoluteX === 0 || absoluteX === absoluteY || absoluteY !== 0 && absoluteY / absoluteX >= 2;
};

exports.isVerticalScroll = isVerticalScroll;
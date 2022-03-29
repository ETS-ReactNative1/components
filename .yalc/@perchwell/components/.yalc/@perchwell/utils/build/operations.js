"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function formatCurrency(num) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var lookup = [{
    value: 1,
    symbol: ''
  }, {
    value: 1e3,
    symbol: 'K'
  }, {
    value: 1e6,
    symbol: 'M'
  }, {
    value: 1e9,
    symbol: 'B'
  }, {
    value: 1e12,
    symbol: 'T'
  }, {
    value: 1e15,
    symbol: 'P'
  }, {
    value: 1e18,
    symbol: 'E'
  }];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function (item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
}

var _default = formatCurrency;
exports["default"] = _default;
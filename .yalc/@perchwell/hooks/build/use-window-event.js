"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function useWindowEvent(event, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0, _react.useEffect)(function () {
    window.addEventListener(event, callback, options);
    return function () {
      window.removeEventListener(event, callback);
    };
  });
}

var _default = useWindowEvent;
exports["default"] = _default;
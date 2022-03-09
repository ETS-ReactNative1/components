"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function useDocumentEvent(event, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0, _react.useEffect)(function () {
    document.addEventListener(event, callback, options);
    return function () {
      return document.removeEventListener(event, callback);
    };
  });
}

var _default = useDocumentEvent;
exports["default"] = _default;
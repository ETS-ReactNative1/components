"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useAsync: true,
  useCurrentBreakpoint: true,
  useDocumentEvent: true,
  useHeaderHeight: true,
  useResponsive: true,
  useWindowEvent: true
};
Object.defineProperty(exports, "useAsync", {
  enumerable: true,
  get: function get() {
    return _useAsync["default"];
  }
});
Object.defineProperty(exports, "useCurrentBreakpoint", {
  enumerable: true,
  get: function get() {
    return _useCurrentBreakpoint["default"];
  }
});
Object.defineProperty(exports, "useDocumentEvent", {
  enumerable: true,
  get: function get() {
    return _useDocumentEvent["default"];
  }
});
Object.defineProperty(exports, "useHeaderHeight", {
  enumerable: true,
  get: function get() {
    return _useHeaderHeight["default"];
  }
});
Object.defineProperty(exports, "useResponsive", {
  enumerable: true,
  get: function get() {
    return _useResponsive["default"];
  }
});
Object.defineProperty(exports, "useWindowEvent", {
  enumerable: true,
  get: function get() {
    return _useWindowEvent["default"];
  }
});

var _useAsync = _interopRequireWildcard(require("./use-async"));

Object.keys(_useAsync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useAsync[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useAsync[key];
    }
  });
});

var _useCurrentBreakpoint = _interopRequireWildcard(require("./use-current-breakpoint"));

Object.keys(_useCurrentBreakpoint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useCurrentBreakpoint[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useCurrentBreakpoint[key];
    }
  });
});

var _useDocumentEvent = _interopRequireWildcard(require("./use-document-event"));

Object.keys(_useDocumentEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useDocumentEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useDocumentEvent[key];
    }
  });
});

var _useHeaderHeight = _interopRequireWildcard(require("./use-header-height"));

Object.keys(_useHeaderHeight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useHeaderHeight[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useHeaderHeight[key];
    }
  });
});

var _useResponsive = _interopRequireWildcard(require("./use-responsive"));

Object.keys(_useResponsive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useResponsive[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useResponsive[key];
    }
  });
});

var _useWindowEvent = _interopRequireWildcard(require("./use-window-event"));

Object.keys(_useWindowEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useWindowEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useWindowEvent[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getValueByPath() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var current = object;
  path.split('.').forEach(function (path) {
    var _current$path, _current;

    current = (_current$path = (_current = current) === null || _current === void 0 ? void 0 : _current[path]) !== null && _current$path !== void 0 ? _current$path : null;
  });
  return current;
}

var _default = getValueByPath;
exports["default"] = _default;
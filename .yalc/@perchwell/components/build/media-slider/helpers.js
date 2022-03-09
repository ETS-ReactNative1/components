"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeMediaSliderData = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var normalizeMediaSliderData = function normalizeMediaSliderData() {
  var media = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(media).reduce(function (res, key) {
    var _labels$, _labels$2;

    var splittedString = key.split('_');
    var keyNumber = splittedString[splittedString.length - 1];
    return [].concat(_toConsumableArray(res), [{
      type: media[key].type,
      content_url: media[key].content_url,
      title: (_labels$ = labels["title".concat(!isNaN(Number(keyNumber)) ? "_".concat(keyNumber) : '')]) === null || _labels$ === void 0 ? void 0 : _labels$.content,
      subtitle: (_labels$2 = labels["subtitle".concat(!isNaN(Number(keyNumber)) ? "_".concat(keyNumber) : '')]) === null || _labels$2 === void 0 ? void 0 : _labels$2.content
    }]);
  }, []);
};

exports.normalizeMediaSliderData = normalizeMediaSliderData;
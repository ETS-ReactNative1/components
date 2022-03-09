"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processData = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var processData = function processData(data) {
  return groupData(formatData(data));
};

exports.processData = processData;

var createWidthLabel = function createWidthLabel(a, b) {
  return "".concat(formatFt(a), "-").concat(formatFt(b));
};

var formatFt = function formatFt(label) {
  return label.replaceAll('ft', "'");
};

var formatFirstItem = function formatFirstItem(item) {
  if (!item.name.includes('Under ')) {
    return item;
  }

  return _objectSpread(_objectSpread({}, item), {}, {
    name: formatFt(item.name.replace('Under ', '<'))
  });
};

var formatLastItem = function formatLastItem(item) {
  return _objectSpread(_objectSpread({}, item), {}, {
    name: formatFt(item.name)
  });
};

var getSubGroups = function getSubGroups(data) {
  var resp = [];
  var isEvenArray = data.length % 2 === 0;
  var limit = isEvenArray ? data.length : data.length - 1;

  for (var i = 0; i < limit / 2; i++) {
    var itemA = data[2 * i];
    var itemB = data[2 * i + 1];
    var newItem = {
      name: createWidthLabel(itemA.name, itemB.name),
      value: itemA.value + itemB.value,
      count: itemA.count + itemB.count
    };
    resp.push(newItem);
  }

  if (!isEvenArray) {
    resp.push(data.pop());
  }

  return resp;
};

var groupData = function groupData(data) {
  var n = data.length;

  if (n == 0) {
    return data;
  }

  var _data = _slicedToArray(data, 1),
      first = _data[0];

  var last = data.pop();
  var subGroups = getSubGroups(data.slice(1));
  return [formatFirstItem(first)].concat(_toConsumableArray(subGroups), [formatLastItem(last)]);
};

var formatData = function formatData(data) {
  return data.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value,
        count = _ref.count;
    return {
      name: key,
      value: value,
      count: count
    };
  });
};
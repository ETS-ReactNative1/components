"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bySortOrder = bySortOrder;
exports.getExpandedIds = getExpandedIds;
exports.getChildrenIds = getChildrenIds;
exports.getParentIds = getParentIds;
exports.hasChildren = hasChildren;
exports.normalizeTree = normalizeTree;
exports.filterGeographies = filterGeographies;
exports.formatRangeValue = formatRangeValue;
exports.getRangeValue = getRangeValue;
exports.hasRangeError = hasRangeError;

var _fuse = _interopRequireDefault(require("fuse.js"));

var _domain = require("@perchwell/domain");

var _getFormattedNumber = _interopRequireDefault(require("./get-formatted-number"));

var _isNil = _interopRequireDefault(require("./is-nil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function bySortOrder(item1, item2) {
  return item1.sort_order - item2.sort_order;
}

function getExpandedIds(normalizedTree) {
  return Object.keys(normalizedTree).filter(function (key) {
    return normalizedTree[key].geography_type !== _domain.NEIGHBORHOOD_PLACE_TYPE;
  });
}

function getChildrenIds(geography) {
  if (hasChildren(geography)) {
    return geography.children.reduce(function (res, subGeography) {
      if (hasChildren(subGeography)) {
        return [].concat(_toConsumableArray(res), _toConsumableArray(getChildrenIds(subGeography)));
      }

      return [].concat(_toConsumableArray(res), [subGeography.id]);
    }, [geography.id]);
  }

  return [];
}

function getParentIds(normalizedTree, geographyId) {
  var node = normalizedTree[geographyId];
  var res = [];

  while (node) {
    if (node.parentId) {
      res = [].concat(_toConsumableArray(res), [node.parentId]);
    }

    node = normalizedTree[node.parentId];
  }

  return res;
}

function hasChildren(geography) {
  return Array.isArray(geography.children) && geography.children.length > 0;
}

function omit(object, keys) {
  return Object.keys(object).filter(function (key) {
    return Array.isArray(keys) ? !keys.includes(key) : key !== keys;
  }).reduce(function (res, key) {
    return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, key, object[key]));
  }, {});
}

function normalizeTree(_ref) {
  var tree = _ref.tree,
      _ref$parentId = _ref.parentId,
      parentId = _ref$parentId === void 0 ? null : _ref$parentId,
      _ref$initialRes = _ref.initialRes,
      initialRes = _ref$initialRes === void 0 ? {} : _ref$initialRes;
  return tree.reduce(function (res, treeNode) {
    var updatedResult = _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, treeNode.id, _objectSpread(_objectSpread({}, omit(treeNode, 'children')), {}, {
      parentId: parentId
    })));

    if (hasChildren(treeNode)) {
      return _objectSpread(_objectSpread({}, updatedResult), normalizeTree({
        tree: treeNode.children,
        parentId: treeNode.id,
        initialRes: res
      }));
    }

    return updatedResult;
  }, initialRes);
}

function filterGeographies(geographies, searchQuery) {
  if (searchQuery.trim() === '') {
    return {
      hiddenNodes: [],
      noResults: false
    };
  }

  var normalizedTree = normalizeTree({
    tree: geographies
  });
  var fuse = new _fuse["default"](Object.values(normalizedTree), {
    keys: ['name'],
    threshold: 0.1,
    distance: 150
  });
  var matchedIds = fuse.search(searchQuery).map(function (_ref2) {
    var _item$id;

    var item = _ref2.item;
    return (_item$id = item.id) === null || _item$id === void 0 ? void 0 : _item$id.toString();
  });
  var hiddenNodes = Object.keys(normalizedTree).filter(function (key) {
    return !matchedIds.includes(key);
  });
  return {
    hiddenNodes: hiddenNodes,
    noResults: matchedIds.length === 0
  };
}

function formatRangeValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if ((0, _isNil["default"])(value) || value === '') {
    return '';
  }

  if (String(value).includes('.')) {
    var _String$split = String(value).split('.'),
        _String$split2 = _slicedToArray(_String$split, 2),
        beforeDot = _String$split2[0],
        afterDot = _String$split2[1];

    return "".concat((0, _getFormattedNumber["default"])(Number(beforeDot)), ".").concat(afterDot);
  }

  return (0, _getFormattedNumber["default"])(Number(value));
}

function getRangeValue(_ref3) {
  var min = _ref3.min,
      max = _ref3.max,
      config = _ref3.config;

  if (!(0, _isNil["default"])(min) && !(0, _isNil["default"])(max)) {
    var _config$both, _config$both2, _config$both$endAdorn, _config$both3;

    var formattedMin = (0, _getFormattedNumber["default"])(min, config === null || config === void 0 ? void 0 : (_config$both = config.both) === null || _config$both === void 0 ? void 0 : _config$both.min);
    var formattedMax = (0, _getFormattedNumber["default"])(max, config === null || config === void 0 ? void 0 : (_config$both2 = config.both) === null || _config$both2 === void 0 ? void 0 : _config$both2.max);
    var endAdornment = (_config$both$endAdorn = config === null || config === void 0 ? void 0 : (_config$both3 = config.both) === null || _config$both3 === void 0 ? void 0 : _config$both3.endAdornment) !== null && _config$both$endAdorn !== void 0 ? _config$both$endAdorn : '';
    return min === max ? "".concat(formattedMin).concat(endAdornment) : "".concat(formattedMin, " - ").concat(formattedMax).concat(endAdornment);
  }

  if (!(0, _isNil["default"])(min)) {
    var _config$min;

    var _ref4 = (_config$min = config === null || config === void 0 ? void 0 : config.min) !== null && _config$min !== void 0 ? _config$min : {},
        _ref4$startAdornment = _ref4.startAdornment,
        startAdornment = _ref4$startAdornment === void 0 ? '' : _ref4$startAdornment,
        _ref4$endAdornment = _ref4.endAdornment,
        _endAdornment = _ref4$endAdornment === void 0 ? '' : _ref4$endAdornment;

    return (0, _getFormattedNumber["default"])(min, {
      startAdornment: startAdornment,
      endAdornment: _endAdornment
    });
  }

  if (!(0, _isNil["default"])(max)) {
    var _config$max;

    var _ref5 = (_config$max = config === null || config === void 0 ? void 0 : config.max) !== null && _config$max !== void 0 ? _config$max : {},
        _ref5$startAdornment = _ref5.startAdornment,
        _startAdornment = _ref5$startAdornment === void 0 ? '' : _ref5$startAdornment,
        _ref5$endAdornment = _ref5.endAdornment,
        _endAdornment2 = _ref5$endAdornment === void 0 ? '' : _ref5$endAdornment;

    return (0, _getFormattedNumber["default"])(max, {
      startAdornment: _startAdornment,
      endAdornment: _endAdornment2
    });
  }

  return '';
}

function hasRangeError(_ref6) {
  var min = _ref6.min,
      max = _ref6.max;
  return !(0, _isNil["default"])(min) && !(0, _isNil["default"])(max) && Number(min) > Number(max) || !(0, _isNil["default"])(max) && max > 500000000;
}
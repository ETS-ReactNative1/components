"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterList = filterList;
exports.FILTER_TYPES = void 0;

var _getValueByPath = _interopRequireDefault(require("./get-value-by-path"));

var _isNil = _interopRequireDefault(require("./is-nil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FILTER_TYPES = {
  EQUAL: 'equal',
  IN: 'in',
  NIN: 'nin',
  RANGE: 'range',
  GROUP: 'group'
};
exports.FILTER_TYPES = FILTER_TYPES;

var validateFilter = function validateFilter(filter) {
  if (filter.type === FILTER_TYPES.IN) {
    var _filter$value;

    return ((_filter$value = filter === null || filter === void 0 ? void 0 : filter.value) !== null && _filter$value !== void 0 ? _filter$value : []).length > 0;
  }

  if (filter.type === FILTER_TYPES.NIN) {
    var _filter$value2;

    return ((_filter$value2 = filter === null || filter === void 0 ? void 0 : filter.value) !== null && _filter$value2 !== void 0 ? _filter$value2 : []).length > 0;
  }

  if (filter.type === FILTER_TYPES.RANGE) {
    var _filter$value3, _filter$value4;

    return !(0, _isNil["default"])((_filter$value3 = filter.value) === null || _filter$value3 === void 0 ? void 0 : _filter$value3.min) || !(0, _isNil["default"])(filter === null || filter === void 0 ? void 0 : (_filter$value4 = filter.value) === null || _filter$value4 === void 0 ? void 0 : _filter$value4.max);
  }

  if (filter.type === FILTER_TYPES.GROUP) {
    var _filter$rules;

    return ((_filter$rules = filter === null || filter === void 0 ? void 0 : filter.rules) !== null && _filter$rules !== void 0 ? _filter$rules : []).length > 0;
  }

  return !(0, _isNil["default"])(filter === null || filter === void 0 ? void 0 : filter.value);
}; // TODO: temporary solution


var customFilters = {
  'unit_details.full_baths': ['unit_details.half_baths']
};

function sumCustomFilterValues(listItem, filterKey) {
  var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return customFilters[filterKey].reduce(function (res, key) {
    return res + (0, _getValueByPath["default"])(listItem, key);
  }, initial);
}

var compareWithFilter = function compareWithFilter(filter, listItem) {
  var valueToCompare = (0, _getValueByPath["default"])(listItem, filter.key);

  if (filter.type === FILTER_TYPES.IN) {
    if (Array.isArray(valueToCompare)) {
      var stringValues = valueToCompare.map(String);
      return filter.value.some(function (valueItem) {
        return stringValues.includes(valueItem);
      });
    }

    return filter.value.includes(valueToCompare);
  }

  if (filter.type === FILTER_TYPES.NIN) {
    if (Array.isArray(valueToCompare)) {
      var _stringValues = valueToCompare.map(String);

      return filter.value.every(function (valueItem) {
        return !_stringValues.includes(valueItem);
      });
    }

    return !filter.value.includes(valueToCompare);
  }

  if (filter.type === FILTER_TYPES.RANGE) {
    var rangeValueToCompare = customFilters[filter.key] ? sumCustomFilterValues(listItem, filter.key, valueToCompare) : valueToCompare;
    var _filter$value5 = filter.value,
        min = _filter$value5.min,
        max = _filter$value5.max;

    if (!(0, _isNil["default"])(min) && !(0, _isNil["default"])(max)) {
      return rangeValueToCompare >= min && rangeValueToCompare <= max;
    }

    return !(0, _isNil["default"])(min) && rangeValueToCompare >= min || !(0, _isNil["default"])(max) && rangeValueToCompare <= max;
  }

  if (filter.type === FILTER_TYPES.GROUP) {
    return filter === null || filter === void 0 ? void 0 : filter.rules.some(function (rule) {
      return compareWithFilter(rule, listItem);
    });
  }

  return filter.value === valueToCompare;
};

function filterList(list) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var validFilterKeys = Object.keys(filters).filter(function (filterKey) {
    return validateFilter(filters[filterKey]);
  });
  return list.filter(function (listItem) {
    return validFilterKeys.every(function (filterKey) {
      return compareWithFilter(filters[filterKey], listItem);
    });
  });
}
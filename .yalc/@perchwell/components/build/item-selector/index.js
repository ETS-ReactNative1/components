"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemSelector = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@perchwell/utils");

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _filter = require("../filter");

var _textValueComponent = require("../text-value-component");

var _styledComponents2 = require("./styled-components");

var _helpers = require("./helpers");

var _constants = require("./constants");

var _treeItemLabel = require("./tree-item-label");

var _treeItems = require("./tree-items");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: inherit;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: 0px;\n  text-align: left;\n  margin-bottom: 17px;\n  margin-top: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SectionTitle = _styledComponents["default"].div(_templateObject());

function ItemSelector(_ref) {
  var viewMode = _ref.viewMode,
      placeholder = _ref.placeholder,
      data = _ref.data,
      showPlacerInMobile = _ref.showPlacerInMobile,
      filters = _ref.filters,
      setFilter = _ref.setFilter,
      filterKey = _ref.filterKey,
      rest = _objectWithoutProperties(_ref, ["viewMode", "placeholder", "data", "showPlacerInMobile", "filters", "setFilter", "filterKey"]);

  var expandedNodeIds = (0, _react.useMemo)(function () {
    return (0, _utils.getExpandedIds)((0, _utils.normalizeTree)({
      tree: data
    }));
  }, []);
  var handleCheck = (0, _react.useCallback)(function (option) {
    if ((0, _utils.hasChildren)(option)) {
      return;
    }

    var optionData = (0, _helpers.getOptionData)(option, filters === null || filters === void 0 ? void 0 : filters[option.filter_group_id]);
    setFilter(optionData);
  }, [filters, setFilter]);
  var inputValue = (0, _react.useMemo)(function () {
    return (0, _flatten["default"])(Object.keys(filters).filter(function (key) {
      return key === filterKey;
    }).map(function (key) {
      var _filters$key;

      return (_filters$key = filters[key]) === null || _filters$key === void 0 ? void 0 : _filters$key.labels;
    })).join(', ');
  }, [filters]);

  if (viewMode === 'mobile') {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showPlacerInMobile && /*#__PURE__*/_react["default"].createElement(SectionTitle, {
      className: "section-title"
    }, placeholder), data.map(function (item) {
      if (item.variant === _constants.OPTION_VARIANTS.TITLE) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(SectionTitle, {
          className: "section-title"
        }, item.name), item.children.map(function (child) {
          return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MobileTypeFiltersContainer, null, /*#__PURE__*/_react["default"].createElement(_treeItemLabel.TreeItemLabel, {
            key: child.id,
            option: child,
            checked: (0, _helpers.isOptionChecked)(child, filters),
            handleCheck: handleCheck
          }));
        }));
      }

      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MobileTypeFiltersContainer, null, /*#__PURE__*/_react["default"].createElement(_treeItemLabel.TreeItemLabel, {
        key: item.id,
        option: item,
        checked: (0, _helpers.isOptionChecked)(item, filters),
        handleCheck: handleCheck
      }));
    }));
  }

  return /*#__PURE__*/_react["default"].createElement(_filter.Filter, _extends(_defineProperty({
    maxHeight: "400px",
    valueComponent: _textValueComponent.TextValueComponent,
    value: inputValue,
    placeholder: "Type",
    popperMinWidth: "calc(100%/7)",
    border: '1px solid #989898'
  }, "placeholder", placeholder), rest), /*#__PURE__*/_react["default"].createElement(_styledComponents2.TreeView, {
    expanded: expandedNodeIds
  }, /*#__PURE__*/_react["default"].createElement(_treeItems.TreeItems, {
    options: data,
    filters: filters,
    handleCheck: handleCheck,
    filterKey: true
  })));
}

ItemSelector.propTypes = {
  viewMode: _propTypes["default"].oneOf(['mobile', 'desktop']),
  handleOnChange: _propTypes["default"].func.isRequired,
  data: _propTypes["default"].array.isRequired,
  placeholder: _propTypes["default"].string.isRequired,
  showPlacerInMobile: _propTypes["default"].bool
};
ItemSelector.defaultProps = {
  viewMode: 'desktop',
  placeholder: '',
  data: [],
  handleOnChange: function handleOnChange() {},
  showPlacerInMobile: false
};

var Memo = /*#__PURE__*/_react["default"].memo(ItemSelector);

exports.ItemSelector = Memo;
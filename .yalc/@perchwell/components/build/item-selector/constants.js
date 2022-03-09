"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TREE_OPTIONS = exports.LISTING_TYPE_FILTER = exports.PROPERTY_TYPE_FILTER = exports.mapOptionVariantToLabelColor = exports.OPTION_VARIANTS = exports.LISTING_TYPE_FILTER_GROUP_ID = exports.PROPERTY_TYPE_FILTER_GROUP_ID = void 0;

var _utils = require("@perchwell/utils");

var _mapOptionVariantToLa;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PROPERTY_TYPE_FILTER_GROUP_ID = 'property_type_filter';
exports.PROPERTY_TYPE_FILTER_GROUP_ID = PROPERTY_TYPE_FILTER_GROUP_ID;
var LISTING_TYPE_FILTER_GROUP_ID = 'listing_type_filter';
exports.LISTING_TYPE_FILTER_GROUP_ID = LISTING_TYPE_FILTER_GROUP_ID;
var OPTION_VARIANTS = {
  TITLE: 'title',
  ITEM: 'item'
};
exports.OPTION_VARIANTS = OPTION_VARIANTS;
var mapOptionVariantToLabelColor = (_mapOptionVariantToLa = {}, _defineProperty(_mapOptionVariantToLa, OPTION_VARIANTS.TITLE, 'textPrimary'), _defineProperty(_mapOptionVariantToLa, OPTION_VARIANTS.ITEM, '#000'), _mapOptionVariantToLa);
exports.mapOptionVariantToLabelColor = mapOptionVariantToLabelColor;
var PROPERTY_TYPE_FILTER = {
  id: '1',
  name: 'Property Type',
  variant: OPTION_VARIANTS.TITLE,
  children: [{
    id: '11',
    name: 'Condo',
    type: _utils.FILTER_TYPES.GROUP,
    filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
    variant: OPTION_VARIANTS.ITEM,
    rule: {
      key: 'unit_details.property_type',
      value: ['Condo'],
      type: _utils.FILTER_TYPES.IN
    }
  }, {
    id: '12',
    name: 'Co-op',
    type: _utils.FILTER_TYPES.GROUP,
    filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
    variant: OPTION_VARIANTS.ITEM,
    rule: {
      key: 'unit_details.property_type',
      value: ['Co-op', 'Condop'],
      type: _utils.FILTER_TYPES.IN
    }
  }, {
    id: '13',
    name: 'Townhouse',
    type: _utils.FILTER_TYPES.GROUP,
    filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
    variant: OPTION_VARIANTS.ITEM,
    rule: {
      key: 'unit_details.property_type',
      value: ['Single-Family Townhouse', 'Mixed-Use Townhouse', 'Multi-Family Townhouse', 'Detached Home'],
      type: _utils.FILTER_TYPES.IN
    }
  }]
};
exports.PROPERTY_TYPE_FILTER = PROPERTY_TYPE_FILTER;
var LISTING_TYPE_FILTER = {
  id: '2',
  name: 'Listing Type',
  variant: OPTION_VARIANTS.TITLE,
  children: [{
    id: '21',
    name: 'New Development',
    type: _utils.FILTER_TYPES.GROUP,
    filter_group_id: LISTING_TYPE_FILTER_GROUP_ID,
    variant: OPTION_VARIANTS.ITEM,
    rule: {
      key: 'features.new_development',
      value: true,
      type: _utils.FILTER_TYPES.EQUAL
    }
  }, {
    id: '22',
    name: 'Coming Soon',
    type: _utils.FILTER_TYPES.GROUP,
    filter_group_id: LISTING_TYPE_FILTER_GROUP_ID,
    variant: OPTION_VARIANTS.ITEM,
    rule: {
      key: 'custom_attributes.serhant_coming_soon',
      value: true,
      type: _utils.FILTER_TYPES.EQUAL
    }
  }]
};
exports.LISTING_TYPE_FILTER = LISTING_TYPE_FILTER;
var TREE_OPTIONS = [{
  id: '11',
  name: 'Condo',
  type: _utils.FILTER_TYPES.GROUP,
  filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
  variant: OPTION_VARIANTS.ITEM,
  rule: {
    key: 'unit_details.property_type',
    value: ['Condo'],
    type: _utils.FILTER_TYPES.IN
  }
}, {
  id: '12',
  name: 'Co-op',
  type: _utils.FILTER_TYPES.GROUP,
  filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
  variant: OPTION_VARIANTS.ITEM,
  rule: {
    key: 'unit_details.property_type',
    value: ['Co-op', 'Condop'],
    type: _utils.FILTER_TYPES.IN
  }
}, {
  id: '13',
  //TODO: Set correct id to  Single Family Townhouse
  name: 'Single Family Townhouse',
  type: _utils.FILTER_TYPES.GROUP,
  filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
  variant: OPTION_VARIANTS.ITEM,
  rule: {
    key: 'unit_details.property_type',
    value: ['Single-Family Townhouse', 'Mixed-Use Townhouse', 'Multi-Family Townhouse', 'Detached Home'],
    type: _utils.FILTER_TYPES.IN
  }
}, {
  id: '14',
  //TODO: Set correct id to  Multi-Family Townhouse
  name: 'Multi-Family Townhouse',
  type: _utils.FILTER_TYPES.GROUP,
  filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
  variant: OPTION_VARIANTS.ITEM,
  rule: {
    key: 'unit_details.property_type',
    value: ['Single-Family Townhouse', 'Mixed-Use Townhouse', 'Multi-Family Townhouse', 'Detached Home'],
    type: _utils.FILTER_TYPES.IN
  }
}];
exports.TREE_OPTIONS = TREE_OPTIONS;
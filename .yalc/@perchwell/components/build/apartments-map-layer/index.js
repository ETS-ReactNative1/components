"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApartmentsMapLayer = ApartmentsMapLayer;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _domain = require("@perchwell/domain");

var _reactMapboxGl = require("react-mapbox-gl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ACTIVE_PIN_COLOR = '#005F49';

function ApartmentsMapLayer(_ref) {
  var _activeApartment$loca, _activeApartment$loca2, _activeApartment$loca3, _activeApartment$loca4;

  var apartments = _ref.apartments,
      state = _ref.state,
      setState = _ref.setState,
      onPinClick = _ref.onPinClick,
      activePinColor = _ref.activePinColor,
      pinColor = _ref.pinColor,
      textColor = _ref.textColor;
  var _state$hoveredApartme = state.hoveredApartmentId,
      hoveredApartmentId = _state$hoveredApartme === void 0 ? null : _state$hoveredApartme,
      _state$activeApartmen = state.activeApartmentId,
      activeApartmentId = _state$activeApartmen === void 0 ? null : _state$activeApartmen;

  var searchApartment = function searchApartment(apartmentId) {
    return apartments.find(function (apartment) {
      return apartment.id === apartmentId;
    });
  };

  var activeApartment = (0, _react.useMemo)(function () {
    return searchApartment(activeApartmentId);
  }, [apartments, activeApartmentId]);
  var handlePinMouseEnter = (0, _react.useCallback)(function (event) {
    var _event$features$, _event$features$$prop;

    var apartmentId = (_event$features$ = event.features[0]) === null || _event$features$ === void 0 ? void 0 : (_event$features$$prop = _event$features$.properties) === null || _event$features$$prop === void 0 ? void 0 : _event$features$$prop.id;

    if (event.features && event.features.length > 0) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        hoveredApartmentId: apartmentId
      }));
    }
  }, [state]);
  var handlePinMouseLeave = (0, _react.useCallback)(function () {
    return setState(_objectSpread(_objectSpread({}, state), {}, {
      hoveredApartmentId: null
    }));
  }, [state]);
  var handlePinClick = (0, _react.useCallback)(function (event) {
    var _event$features;

    var feature = event === null || event === void 0 ? void 0 : (_event$features = event.features) === null || _event$features === void 0 ? void 0 : _event$features[0];

    if (feature) {
      var properties = feature.properties;
      var id = properties.id;
      var apartment = searchApartment(id);
      onPinClick(apartment);
      setState(function (state) {
        var _feature$properties, _feature$properties2;

        return _objectSpread(_objectSpread({}, state), {}, {
          activeApartmentId: (feature === null || feature === void 0 ? void 0 : (_feature$properties = feature.properties) === null || _feature$properties === void 0 ? void 0 : _feature$properties.id) === activeApartmentId ? null : feature === null || feature === void 0 ? void 0 : (_feature$properties2 = feature.properties) === null || _feature$properties2 === void 0 ? void 0 : _feature$properties2.id
        });
      });
    }
  }, [setState, activeApartmentId]);
  var features = (0, _react.useMemo)(function () {
    return apartments.map(function (apartment) {
      var _apartment$location, _apartment$location$c, _apartment$location2, _apartment$location2$;

      return {
        type: 'Feature',
        properties: {
          id: apartment.id
        },
        geometry: {
          type: 'Point',
          coordinates: [apartment === null || apartment === void 0 ? void 0 : (_apartment$location = apartment.location) === null || _apartment$location === void 0 ? void 0 : (_apartment$location$c = _apartment$location.coordinates) === null || _apartment$location$c === void 0 ? void 0 : _apartment$location$c[1], apartment === null || apartment === void 0 ? void 0 : (_apartment$location2 = apartment.location) === null || _apartment$location2 === void 0 ? void 0 : (_apartment$location2$ = _apartment$location2.coordinates) === null || _apartment$location2$ === void 0 ? void 0 : _apartment$location2$[0]]
        }
      };
    });
  }, [apartments]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactMapboxGl.Source, {
    id: "apartments",
    geoJsonSource: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: features
      },
      cluster: true,
      clusterMaxZoom: 14,
      clusterProperties: {
        apartment_ids: [['concat', ['accumulated'], ['get', 'apartment_ids']], ['get', 'id']]
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactMapboxGl.Layer, {
    id: "clusters",
    type: "circle",
    sourceId: "apartments",
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': ['case', ['in', hoveredApartmentId, ['get', 'apartment_ids']], activePinColor, pinColor],
      'circle-stroke-width': 6,
      'circle-stroke-color': ['case', ['in', hoveredApartmentId, ['get', 'apartment_ids']], activePinColor, pinColor],
      'circle-stroke-opacity': 0.3,
      'circle-radius': ['step', ['get', 'point_count'], 10, 10, 20, 20, 30]
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactMapboxGl.Layer, {
    id: "unclustered-points",
    type: "circle",
    sourceId: "apartments",
    filter: ['all', ['!', ['has', 'point_count']]],
    paint: {
      'circle-color': ['case', ['==', hoveredApartmentId, ['get', 'id']], activePinColor, ['==', activeApartmentId, ['get', 'id']], activePinColor, pinColor],
      'circle-stroke-width': 6,
      'circle-stroke-color': ['case', ['==', hoveredApartmentId, ['get', 'id']], activePinColor, ['==', activeApartmentId, ['get', 'id']], activePinColor, pinColor],
      'circle-stroke-opacity': 0.3,
      'circle-radius': 10
    },
    onMouseEnter: handlePinMouseEnter,
    onMouseLeave: handlePinMouseLeave,
    onClick: handlePinClick
  }), /*#__PURE__*/_react["default"].createElement(_reactMapboxGl.Layer, {
    id: "cluster-count",
    type: "symbol",
    sourceId: "apartments",
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    },
    paint: {
      'text-color': textColor
    }
  }), activeApartment && /*#__PURE__*/_react["default"].createElement(_reactMapboxGl.Popup, {
    coordinates: [activeApartment === null || activeApartment === void 0 ? void 0 : (_activeApartment$loca = activeApartment.location) === null || _activeApartment$loca === void 0 ? void 0 : (_activeApartment$loca2 = _activeApartment$loca.coordinates) === null || _activeApartment$loca2 === void 0 ? void 0 : _activeApartment$loca2[1], activeApartment === null || activeApartment === void 0 ? void 0 : (_activeApartment$loca3 = activeApartment.location) === null || _activeApartment$loca3 === void 0 ? void 0 : (_activeApartment$loca4 = _activeApartment$loca3.coordinates) === null || _activeApartment$loca4 === void 0 ? void 0 : _activeApartment$loca4[0]]
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Listing Card")));
}

ApartmentsMapLayer.propTypes = {
  apartments: _propTypes["default"].arrayOf(_domain.ApartmentType).isRequired,
  state: _propTypes["default"].object,
  setState: _propTypes["default"].func.isRequired,
  activePinColor: _propTypes["default"].string.isRequired,
  pinColor: _propTypes["default"].string.isRequired,
  textColor: _propTypes["default"].string.isRequired
};
ApartmentsMapLayer.defaultProps = {
  state: {},
  activePinColor: ACTIVE_PIN_COLOR,
  pinColor: ACTIVE_PIN_COLOR,
  textColor: '#000',
  setState: function setState() {}
};
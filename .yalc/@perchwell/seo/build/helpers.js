"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markup = markup;
exports.generateAgentJsonLd = generateAgentJsonLd;
exports.generateBreadcrumbJsonLd = generateBreadcrumbJsonLd;
exports.generateEventJsonLd = generateEventJsonLd;
exports.generateOrganizationJsonLd = generateOrganizationJsonLd;
exports.generatePlaceJsonLd = generatePlaceJsonLd;
exports.generateProductJsonLd = generateProductJsonLd;
exports.generateResidenceJsonLd = generateResidenceJsonLd;

var _schemas = require("./schemas");

function markup(json) {
  return {
    __html: JSON.stringify(json, function (key, value) {
      return value === null ? undefined : value;
    }, 2)
  };
}

function generateAgentJsonLd(props) {
  var markupFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : markup;
  return markupFunction((0, _schemas.AgentSchema)(props));
}

function generateBreadcrumbJsonLd(props) {
  var markupFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : markup;
  return markupFunction((0, _schemas.BreadcrumbSchema)(props));
}

function generateEventJsonLd(props) {
  var markupFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : markup;
  return markupFunction((0, _schemas.EventSchema)(props));
}

function generateOrganizationJsonLd(props) {
  var markupFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : markup;
  return markupFunction((0, _schemas.OrganizationSchema)(props));
}

function generatePlaceJsonLd(props) {
  var markupFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : markup;
  return markupFunction((0, _schemas.PlaceSchema)(props));
}

function generateProductJsonLd(props) {
  var markupFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : markup;
  return markupFunction((0, _schemas.ProductSchema)(props));
}

function generateResidenceJsonLd(props) {
  var markupFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : markup;
  return markupFunction((0, _schemas.ResidenceSchema)(props));
}
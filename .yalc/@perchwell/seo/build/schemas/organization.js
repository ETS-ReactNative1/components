"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrganizationSchema = OrganizationSchema;

function OrganizationSchema(_ref) {
  var name = _ref.name,
      logo = _ref.logo,
      url = _ref.url;
  return {
    '@context': 'https://schema.org/',
    '@type': 'Organization',
    name: name,
    logo: logo,
    url: url
  };
}
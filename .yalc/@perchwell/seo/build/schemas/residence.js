"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResidenceSchema = ResidenceSchema;

function ResidenceSchema(_ref) {
  var address = _ref.address;
  return {
    '@context': 'https://schema.org/',
    '@type': 'Residence',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode
    }
  };
}
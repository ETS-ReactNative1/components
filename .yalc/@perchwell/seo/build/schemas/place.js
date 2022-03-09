"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceSchema = PlaceSchema;

function PlaceSchema(_ref) {
  var name = _ref.name,
      address = _ref.address,
      geo = _ref.geo,
      image = _ref.image;
  return {
    '@context': 'https://schema.org/',
    '@type': 'Place',
    name: name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode
    },
    geo: geo ? {
      '@type': 'GeoCoordinates',
      latitude: geo[0],
      longitude: geo[1]
    } : null,
    image: image !== null && image !== void 0 ? image : null
  };
}
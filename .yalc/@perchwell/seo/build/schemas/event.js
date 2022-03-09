"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventSchema = EventSchema;

function EventSchema(_ref) {
  var name = _ref.name,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      image = _ref.image,
      description = _ref.description,
      address = _ref.address;
  return {
    '@context': 'https://schema.org',
    '@type': 'EventSchema',
    name: name,
    startDate: startDate,
    endDate: endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    image: image !== null && image !== void 0 ? image : null,
    description: description !== null && description !== void 0 ? description : null,
    location: address ? {
      '@type': 'Place',
      name: address.streetAddress,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.streetAddress,
        addressLocality: address.locality,
        addressRegion: address.region,
        postalCode: address.postalCode
      }
    } : null
  };
}
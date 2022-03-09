"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbSchema = void 0;

var BreadcrumbSchema = function BreadcrumbSchema(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(function (item) {
      var _item$image;

      return {
        '@type': 'ListItem',
        position: item.position,
        item: {
          '@id': "".concat(process.env.HOST).concat(item.item),
          image: (_item$image = item.image) !== null && _item$image !== void 0 ? _item$image : null,
          name: item.name
        }
      };
    })
  };
};

exports.BreadcrumbSchema = BreadcrumbSchema;
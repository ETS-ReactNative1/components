"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListingTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

var ListingTable = function ListingTable(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? [] : _ref$headers,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? [] : _ref$rows;

  var formatDate = function formatDate(time) {
    if (!time) return '';
    var date = new Date(time);
    var month = date.toLocaleString('en-US', {
      month: 'long'
    });
    var day = date.getDate();
    var year = date.getFullYear();
    return "".concat(month, " ").concat(day, ", ").concat(year);
  };

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.TableContainer, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.TableTitle, {
    className: "medium ml-b"
  }, title), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, headers.map(function (header, i) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: "title-".concat(header)
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents.Title3, {
      key: "title-".concat(header),
      className: "extra-bold"
    }, header));
  })), /*#__PURE__*/_react["default"].createElement("tbody", null, rows.map(function (row) {
    var _row$unit_number = row.unit_number,
        unit_number = _row$unit_number === void 0 ? '' : _row$unit_number,
        _row$beds = row.beds,
        beds = _row$beds === void 0 ? 0 : _row$beds,
        _row$baths = row.baths,
        baths = _row$baths === void 0 ? 0 : _row$baths,
        _row$available_date = row.available_date,
        available_date = _row$available_date === void 0 ? null : _row$available_date,
        sqft = row.sqft,
        _row$price = row.price,
        price = _row$price === void 0 ? '' : _row$price,
        _row$no_fee = row.no_fee,
        no_fee = _row$no_fee === void 0 ? false : _row$no_fee;
    return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement(_styledComponents.Column, null, unit_number), /*#__PURE__*/_react["default"].createElement(_styledComponents.Column, null, !beds ? 'Studio' : "".concat(beds, " BR")), /*#__PURE__*/_react["default"].createElement(_styledComponents.Column, null, "".concat(baths, " BA")), /*#__PURE__*/_react["default"].createElement(_styledComponents.Column, null, formatDate(available_date)), /*#__PURE__*/_react["default"].createElement(_styledComponents.Column, null, sqft), /*#__PURE__*/_react["default"].createElement(_styledComponents.Column, {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, "$".concat(numberWithCommas(price))), no_fee && /*#__PURE__*/_react["default"].createElement(_styledComponents.NoFee, null, /*#__PURE__*/_react["default"].createElement("span", null, "No Fee"))));
  }))));
};

exports.ListingTable = ListingTable;
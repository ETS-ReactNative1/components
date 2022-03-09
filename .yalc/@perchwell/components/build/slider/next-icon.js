"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("./styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NextIcon = function NextIcon(_ref) {
  var className = _ref.className,
      arrowColor = _ref.arrowColor,
      onClick = _ref.onClick;

  if (className.includes('disabled')) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.NextIcon, {
    arrowcolor: arrowColor,
    onClick: onClick
  });
};

NextIcon.defaultProps = {
  className: ''
};
NextIcon.propTypes = {
  onClick: _propTypes["default"].func,
  arrowColor: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string
};

var Memo = /*#__PURE__*/_react["default"].memo(NextIcon);

exports.NextIcon = Memo;
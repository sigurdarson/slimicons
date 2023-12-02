"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgComponent = function SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.size || 24,
    height: props.size || 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 21C10.8614 21 9.90491 20.1439 9.77917 19.0122L9.68748 18.187C9.64067 17.7657 9.36528 17.4087 8.99846 17.1964C8.6312 16.9838 8.18728 16.9258 7.79859 17.0961L7.03769 17.4294C5.9948 17.8864 4.77511 17.4861 4.20581 16.5C3.6365 15.5139 3.89967 14.2575 4.81683 13.5828L5.48646 13.0902C5.828 12.8389 6.00004 12.424 6.00004 12C6.00004 11.576 5.828 11.1611 5.48646 10.9098L4.81683 10.4172C3.89967 9.7425 3.63651 8.48606 4.20581 7.5C4.77511 6.51394 5.9948 6.11363 7.03769 6.57056L7.79859 6.90393C8.18728 7.07423 8.6312 7.01621 8.99846 6.80361C9.36528 6.59126 9.64067 6.23429 9.68748 5.81302L9.77917 4.98777C9.90491 3.85613 10.8614 3 12 3C13.1386 3 14.0952 3.85613 14.2209 4.98777L14.3126 5.81302C14.3594 6.23428 14.6348 6.59126 15.0016 6.80361C15.3689 7.0162 15.8128 7.07423 16.2015 6.90393L16.9624 6.57056C18.0053 6.11363 19.225 6.51394 19.7943 7.5C20.3636 8.48606 20.1004 9.7425 19.1832 10.4172L18.5136 10.9098C18.1721 11.1611 18 11.576 18 12C18 12.424 18.1721 12.8389 18.5136 13.0902L19.1832 13.5828C20.1004 14.2575 20.3636 15.5139 19.7943 16.5C19.225 17.4861 18.0053 17.8864 16.9624 17.4294L16.2015 17.0961C15.8128 16.9258 15.3689 16.9838 15.0016 17.1964C14.6348 17.4087 14.3594 17.7657 14.3126 18.187L14.2209 19.0122C14.0952 20.1439 13.1386 21 12 21Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
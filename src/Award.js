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
    d: "M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8C14 8.53043 13.7893 9.03914 13.4142 9.41421C13.0391 9.78929 12.5304 10 12 10C11.4696 10 10.9609 9.78929 10.5858 9.41421C10.2107 9.03914 10 8.53043 10 8C10 7.46957 10.2107 6.96086 10.5858 6.58579C10.9609 6.21071 11.4696 6 12 6C12.5304 6 13.0391 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 8L17.7291 17.4776C17.8151 18.5961 17.8581 19.1553 17.6529 19.4485C17.4747 19.7033 17.1881 19.8606 16.8774 19.8742C16.5199 19.8899 16.0712 19.5534 15.1738 18.8803L14.88 18.66C13.8472 17.8854 13.3308 17.4981 12.7637 17.3488C12.2631 17.2171 11.7369 17.2171 11.2363 17.3488C10.6692 17.4981 10.1528 17.8854 9.12001 18.66L8.82625 18.8803C7.92883 19.5534 7.48012 19.8899 7.12261 19.8742C6.81197 19.8606 6.52534 19.7033 6.34708 19.4485C6.14191 19.1553 6.18493 18.5961 6.27097 17.4776L7.00001 8",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
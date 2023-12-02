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
    d: "M3 6.75C3 6.05302 3 5.70453 3.05764 5.41473C3.29436 4.22466 4.22466 3.29436 5.41473 3.05764C5.70453 3 6.05302 3 6.75 3C7.44698 3 7.79547 3 8.08527 3.05764C9.27534 3.29436 10.2056 4.22466 10.4424 5.41473C10.5 5.70453 10.5 6.05302 10.5 6.75C10.5 7.44698 10.5 7.79547 10.4424 8.08527C10.2056 9.27534 9.27534 10.2056 8.08527 10.4424C7.79547 10.5 7.44698 10.5 6.75 10.5C6.05302 10.5 5.70453 10.5 5.41473 10.4424C4.22466 10.2056 3.29436 9.27534 3.05764 8.08527C3 7.79547 3 7.44698 3 6.75Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17.25C3 16.553 3 16.2045 3.05764 15.9147C3.29436 14.7247 4.22466 13.7944 5.41473 13.5576C5.70453 13.5 6.05302 13.5 6.75 13.5C7.44698 13.5 7.79547 13.5 8.08527 13.5576C9.27534 13.7944 10.2056 14.7247 10.4424 15.9147C10.5 16.2045 10.5 16.553 10.5 17.25C10.5 17.947 10.5 18.2955 10.4424 18.5853C10.2056 19.7753 9.27534 20.7056 8.08527 20.9424C7.79547 21 7.44698 21 6.75 21C6.05302 21 5.70453 21 5.41473 20.9424C4.22466 20.7056 3.29436 19.7753 3.05764 18.5853C3 18.2955 3 17.947 3 17.25Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 6.75C13.5 6.05302 13.5 5.70453 13.5576 5.41473C13.7944 4.22466 14.7247 3.29436 15.9147 3.05764C16.2045 3 16.553 3 17.25 3C17.947 3 18.2955 3 18.5853 3.05764C19.7753 3.29436 20.7056 4.22466 20.9424 5.41473C21 5.70453 21 6.05302 21 6.75C21 7.44698 21 7.79547 20.9424 8.08527C20.7056 9.27534 19.7753 10.2056 18.5853 10.4424C18.2955 10.5 17.947 10.5 17.25 10.5C16.553 10.5 16.2045 10.5 15.9147 10.4424C14.7247 10.2056 13.7944 9.27534 13.5576 8.08527C13.5 7.79547 13.5 7.44698 13.5 6.75Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.25 17.5H20.25",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
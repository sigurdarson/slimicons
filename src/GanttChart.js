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
    d: "M21 21.75C21.4142 21.75 21.75 21.4142 21.75 21C21.75 20.5858 21.4142 20.25 21 20.25V21.75ZM3.75 3C3.75 2.58579 3.41421 2.25 3 2.25C2.58579 2.25 2.25 2.58579 2.25 3H3.75ZM4.63803 20.673L4.29754 21.3413L4.29754 21.3413L4.63803 20.673ZM3.32698 19.362L3.99524 19.0215L3.99524 19.0215L3.32698 19.362ZM21 20.25H7.8V21.75H21V20.25ZM3.75 16.2V3H2.25V16.2H3.75ZM7.8 20.25C6.94755 20.25 6.35331 20.2494 5.89068 20.2116C5.4368 20.1745 5.17604 20.1054 4.97852 20.0048L4.29754 21.3413C4.74175 21.5676 5.22189 21.662 5.76853 21.7066C6.30641 21.7506 6.9723 21.75 7.8 21.75V20.25ZM2.25 16.2C2.25 17.0277 2.24942 17.6936 2.29336 18.2315C2.33803 18.7781 2.43238 19.2582 2.65873 19.7025L3.99524 19.0215C3.8946 18.824 3.82546 18.5632 3.78838 18.1093C3.75058 17.6467 3.75 17.0525 3.75 16.2H2.25ZM4.97852 20.0048C4.55516 19.789 4.21095 19.4448 3.99524 19.0215L2.65873 19.7025C3.01825 20.4081 3.59193 20.9817 4.29754 21.3413L4.97852 20.0048Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.2 16H16M8 12H14.4M9.6 8H16",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
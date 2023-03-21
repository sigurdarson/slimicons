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
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 8,
    y: 3,
    width: 8,
    height: 4,
    rx: 2,
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.75 17C19.75 16.5858 19.4142 16.25 19 16.25C18.5858 16.25 18.25 16.5858 18.25 17H19.75ZM18.25 11C18.25 11.4142 18.5858 11.75 19 11.75C19.4142 11.75 19.75 11.4142 19.75 11H18.25ZM6.63803 20.673L6.97852 20.0048L6.63803 20.673ZM18.9743 7.60842L18.2308 7.70632L18.9743 7.60842ZM5.02567 7.60842L4.28208 7.51053L5.02567 7.60842ZM7.60842 5.02567L7.51053 4.28208L7.60842 5.02567ZM16 20.25H9.8V21.75H16V20.25ZM5.75 16.2V8.5H4.25V16.2H5.75ZM18.25 17V18H19.75V17H18.25ZM18.25 8.5V11H19.75V8.5H18.25ZM9.8 20.25C8.94755 20.25 8.35331 20.2494 7.89068 20.2116C7.4368 20.1745 7.17604 20.1054 6.97852 20.0048L6.29754 21.3413C6.74175 21.5676 7.22189 21.662 7.76853 21.7066C8.30641 21.7506 8.9723 21.75 9.8 21.75V20.25ZM4.25 16.2C4.25 17.0277 4.24942 17.6936 4.29336 18.2315C4.33803 18.7781 4.43238 19.2582 4.65873 19.7025L5.99524 19.0215C5.8946 18.824 5.82546 18.5632 5.78838 18.1093C5.75058 17.6467 5.75 17.0525 5.75 16.2H4.25ZM6.97852 20.0048C6.55516 19.789 6.21095 19.4448 5.99524 19.0215L4.65873 19.7025C5.01825 20.4081 5.59193 20.9817 6.29754 21.3413L6.97852 20.0048ZM16 21.75C18.0711 21.75 19.75 20.0711 19.75 18H18.25C18.25 19.2426 17.2426 20.25 16 20.25V21.75ZM15.5 5.75C15.9883 5.75 16.1598 5.75162 16.2937 5.76925L16.4895 4.28208C16.2335 4.24838 15.9406 4.25 15.5 4.25V5.75ZM19.75 8.5C19.75 8.05942 19.7516 7.7665 19.7179 7.51053L18.2308 7.70632C18.2484 7.84024 18.25 8.01174 18.25 8.5H19.75ZM16.2937 5.76925C17.3033 5.90217 18.0978 6.69667 18.2308 7.70632L19.7179 7.51053C19.4964 5.82778 18.1722 4.50362 16.4895 4.28208L16.2937 5.76925ZM5.75 8.5C5.75 8.01174 5.75162 7.84024 5.76925 7.70632L4.28208 7.51053C4.24838 7.7665 4.25 8.05942 4.25 8.5H5.75ZM8.5 4.25C8.05942 4.25 7.7665 4.24838 7.51053 4.28208L7.70632 5.76925C7.84024 5.75162 8.01174 5.75 8.5 5.75V4.25ZM5.76925 7.70632C5.90217 6.69667 6.69667 5.90217 7.70632 5.76925L7.51053 4.28208C5.82778 4.50362 4.50362 5.82778 4.28208 7.51053L5.76925 7.70632Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18L11.6852 17.7482C10.0837 16.4669 9.28291 15.8263 8.99299 15.0524C8.73879 14.3738 8.73879 13.6262 8.99299 12.9476C9.28291 12.1737 10.0837 11.5331 11.6852 10.2518L12 10",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14H19",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
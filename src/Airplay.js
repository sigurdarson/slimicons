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
    d: "M8.09346 17.6879L11.3854 13.7375C11.5965 13.4842 11.702 13.3576 11.8284 13.3114C11.9392 13.2709 12.0608 13.2709 12.1716 13.3114C12.298 13.3576 12.4035 13.4842 12.6146 13.7375L15.9065 17.6879C16.2554 18.1064 16.4298 18.3157 16.4324 18.4925C16.4347 18.6461 16.3663 18.7923 16.2467 18.8889C16.1093 19 15.8368 19 15.292 19H8.70803C8.16318 19 7.89075 19 7.75326 18.8889C7.63373 18.7923 7.56526 18.6461 7.56758 18.4925C7.57024 18.3157 7.74465 18.1064 8.09346 17.6879Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.8 4.25H7.7679C6.95506 4.24999 6.29944 4.24999 5.76853 4.29336C5.2219 4.33803 4.74175 4.43239 4.29754 4.65873C3.59193 5.01825 3.01825 5.59193 2.65873 6.29754C2.43239 6.74175 2.33803 7.2219 2.29336 7.76853C2.24999 8.29944 2.24999 8.95505 2.25 9.76788V9.7679V9.8V12.2V12.2321V12.2321C2.24999 13.045 2.24999 13.7006 2.29336 14.2315C2.33803 14.7781 2.43239 15.2582 2.65873 15.7025C3.01825 16.4081 3.59193 16.9817 4.29754 17.3413C4.74175 17.5676 5.2219 17.662 5.76853 17.7066V17.7066C5.89408 17.7169 6 17.6164 6 17.4905V16.3293C6 16.2676 5.95216 16.2166 5.89068 16.2116V16.2116C5.4368 16.1745 5.17604 16.1054 4.97852 16.0048C4.55516 15.789 4.21095 15.4448 3.99524 15.0215C3.8946 14.824 3.82547 14.5632 3.78838 14.1093C3.75058 13.6467 3.75 13.0525 3.75 12.2V9.8C3.75 8.94755 3.75058 8.35331 3.78838 7.89068C3.82547 7.4368 3.8946 7.17604 3.99524 6.97852C4.21095 6.55516 4.55516 6.21095 4.97852 5.99524C5.17604 5.8946 5.4368 5.82546 5.89068 5.78838C6.35331 5.75058 6.94755 5.75 7.8 5.75H16.2C17.0525 5.75 17.6467 5.75058 18.1093 5.78838C18.5632 5.82546 18.824 5.8946 19.0215 5.99524C19.4448 6.21095 19.789 6.55516 20.0048 6.97852C20.1054 7.17604 20.1745 7.4368 20.2116 7.89068C20.2494 8.35331 20.25 8.94755 20.25 9.8V12.2C20.25 13.0525 20.2494 13.6467 20.2116 14.1093C20.1745 14.5632 20.1054 14.824 20.0048 15.0215C19.789 15.4448 19.4448 15.789 19.0215 16.0048C18.824 16.1054 18.5632 16.1745 18.1093 16.2116V16.2116C18.0478 16.2166 18 16.2676 18 16.3293V17.4905C18 17.6164 18.1059 17.7169 18.2315 17.7066V17.7066C18.7781 17.662 19.2582 17.5676 19.7025 17.3413C20.4081 16.9817 20.9817 16.4081 21.3413 15.7025C21.5676 15.2582 21.662 14.7781 21.7066 14.2315C21.75 13.7006 21.75 13.045 21.75 12.2321V12.2V9.8V9.76788C21.75 8.95505 21.75 8.29944 21.7066 7.76853C21.662 7.2219 21.5676 6.74175 21.3413 6.29754C20.9817 5.59193 20.4081 5.01825 19.7025 4.65873C19.2582 4.43239 18.7781 4.33803 18.2315 4.29336C17.7006 4.24999 17.0449 4.24999 16.2321 4.25H16.2H7.8Z",
    fill: "black"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
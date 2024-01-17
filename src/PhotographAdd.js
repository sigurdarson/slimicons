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
    d: "M13 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.63498 14.0475L6.25902 14.4635L6.25902 14.4635L5.63498 14.0475ZM11.3458 13.8468L10.7098 13.4493L10.7098 13.4493L11.3458 13.8468ZM12.4038 12.1539L13.0398 12.5514L13.0398 12.5514L12.4038 12.1539ZM16.8771 12.5863C17.0903 12.9415 17.551 13.0567 17.9061 12.8436C18.2613 12.6304 18.3765 12.1698 18.1634 11.8146L16.8771 12.5863ZM8.47649 13.9687L7.87649 14.4187L7.87649 14.4187L8.47649 13.9687ZM3.62404 18.416L6.25902 14.4635L5.01095 13.6315L2.37596 17.584L3.62404 18.416ZM11.9818 14.2443L13.0398 12.5514L11.7678 11.7564L10.7098 13.4493L11.9818 14.2443ZM13.0398 12.5514C13.9305 11.1263 16.0125 11.1452 16.8771 12.5863L18.1634 11.8146C16.7223 9.41272 13.2523 9.38118 11.7678 11.7564L13.0398 12.5514ZM7.87649 14.4187C8.92637 15.8185 11.0544 15.7281 11.9818 14.2443L10.7098 13.4493C10.3408 14.0396 9.49418 14.0756 9.07649 13.5187L7.87649 14.4187ZM6.25902 14.4635C6.63832 13.8946 7.46622 13.8716 7.87649 14.4187L9.07649 13.5187C8.04526 12.1437 5.96432 12.2014 5.01095 13.6315L6.25902 14.4635Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 18H18M18 18H21M18 18V21M18 18V15",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
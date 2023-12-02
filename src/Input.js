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
    d: "M17 5V19",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 5H14",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 19H14",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8H7C6.07003 8 5.60504 8 5.22354 8.10222C4.18827 8.37962 3.37962 9.18827 3.10222 10.2235C3 10.605 3 11.07 3 12C3 12.93 3 13.395 3.10222 13.7765C3.37962 14.8117 4.18827 15.6204 5.22354 15.8978C5.60504 16 6.07003 16 7 16H14",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 16C17.93 16 18.395 16 18.7765 15.8978C19.8117 15.6204 20.6204 14.8117 20.8978 13.7765C21 13.395 21 12.93 21 12C21 11.07 21 10.605 20.8978 10.2235C20.6204 9.18827 19.8117 8.37962 18.7765 8.10222C18.395 8 17.93 8 17 8",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
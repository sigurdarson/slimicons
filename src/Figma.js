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
    d: "M6 12C6 10.3431 7.34315 9 9 9H12V15H9C7.34315 15 6 13.6569 6 12V12Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 18C6 16.3431 7.34315 15 9 15H12V18C12 19.6569 10.6569 21 9 21V21C7.34315 21 6 19.6569 6 18V18Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6C6 4.34315 7.34315 3 9 3H12V9H9C7.34315 9 6 7.65685 6 6V6Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3H15C16.6569 3 18 4.34315 18 6V6C18 7.65685 16.6569 9 15 9H12V3Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12C12 10.3431 13.3431 9 15 9V9C16.6569 9 18 10.3431 18 12V12C18 13.6569 16.6569 15 15 15V15C13.3431 15 12 13.6569 12 12V12Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
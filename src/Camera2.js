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
    x: 3,
    y: 6,
    width: 12,
    height: 12,
    rx: 3,
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 12.1459V11.8541C15 11.2564 15 10.9575 15.0761 10.6895C15.1776 10.3322 15.3766 10.0103 15.6508 9.75972C15.8564 9.57179 16.1237 9.43814 16.6584 9.17082C17.9332 8.53342 18.5706 8.21472 19.0899 8.23809C19.7824 8.26925 20.4093 8.65672 20.7468 9.26214C21 9.7162 21 10.4288 21 11.8541V12.1459C21 13.5712 21 14.2838 20.7468 14.7379C20.4093 15.3433 19.7824 15.7308 19.0899 15.7619C18.5706 15.7853 17.9332 15.4666 16.6584 14.8292L16.6584 14.8292C16.1237 14.5619 15.8564 14.4282 15.6508 14.2403C15.3766 13.9897 15.1776 13.6678 15.0761 13.3105C15 13.0425 15 12.7436 15 12.1459Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
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
    d: "M4 9.77359C4 9.12618 4 8.80248 4.0915 8.51046C4.17249 8.25201 4.30513 8.0127 4.48137 7.80704C4.6805 7.57468 4.955 7.40312 5.504 7.05999L10.304 4.05999C10.9193 3.67545 11.2269 3.48318 11.5568 3.40821C11.8486 3.34192 12.1514 3.34192 12.4432 3.40821C12.7731 3.48318 13.0807 3.67545 13.696 4.05999L18.496 7.05999C19.045 7.40312 19.3195 7.57468 19.5186 7.80704C19.6949 8.0127 19.8275 8.25201 19.9085 8.51046C20 8.80248 20 9.12618 20 9.77359V14.2264C20 14.8738 20 15.1975 19.9085 15.4895C19.8275 15.748 19.6949 15.9873 19.5186 16.1929C19.3195 16.4253 19.045 16.5969 18.496 16.94L13.696 19.94C13.0807 20.3245 12.7731 20.5168 12.4432 20.5918C12.1514 20.6581 11.8486 20.6581 11.5568 20.5918C11.2269 20.5168 10.9193 20.3245 10.304 19.94L5.504 16.94C4.955 16.5969 4.6805 16.4253 4.48137 16.1929C4.30513 15.9873 4.17249 15.748 4.0915 15.4895C4 15.1975 4 14.8738 4 14.2264V9.77359Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
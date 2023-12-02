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
    d: "M15 17.0965C15 18.0264 15 18.395 14.8978 18.7765C14.6204 19.8117 13.8117 20.6204 12.7765 20.8978C12.395 21 11.93 21 11 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V13.5C3 12.1022 3 11.4033 3.22836 10.852C3.53284 10.1169 4.11687 9.53284 4.85195 9.22836C5.40326 9 6.25709 9.00001 7.65492 9.00001M9.96076 14.5962L12.0392 15.7962C13.4943 16.6362 14.2218 17.0563 14.9411 17.094C15.5737 17.1271 16.2006 16.9591 16.732 16.6141C17.336 16.2218 17.7561 15.4943 18.5961 14.0392L19.7961 11.9608C20.6362 10.5057 21.0563 9.77818 21.094 9.05893C21.1271 8.42626 20.9591 7.79934 20.6141 7.26801C20.2218 6.66397 19.4943 6.24393 18.0392 5.40385L15.9608 4.20385C14.5057 3.36377 13.7782 2.94373 13.0589 2.90604C12.4262 2.87288 11.7993 3.04086 11.268 3.38591C10.664 3.77818 10.2439 4.50571 9.40383 5.96077L8.20383 8.03923C7.36375 9.49429 6.94371 10.2218 6.90602 10.9411C6.87286 11.5737 7.04085 12.2007 7.3859 12.732C7.77817 13.336 8.5057 13.7561 9.96076 14.5962Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
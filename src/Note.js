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
    d: "M20 13.25C20.4142 13.25 20.75 13.5858 20.75 14C20.75 14.4142 20.4142 14.75 20 14.75V13.25ZM14.638 14.327L14.9785 14.9952L14.638 14.327ZM12.25 21V18.8H13.75V21H12.25ZM17.8 13.25H20V14.75H17.8V13.25ZM12.25 18.8C12.25 17.9723 12.2494 17.3064 12.2934 16.7685C12.338 16.2219 12.4324 15.7418 12.6587 15.2975L13.9952 15.9785C13.8946 16.176 13.8255 16.4368 13.7884 16.8907C13.7506 17.3533 13.75 17.9475 13.75 18.8H12.25ZM17.8 14.75C16.9475 14.75 16.3533 14.7506 15.8907 14.7884C15.4368 14.8255 15.176 14.8946 14.9785 14.9952L14.2975 13.6587C14.7418 13.4324 15.2219 13.338 15.7685 13.2934C16.3064 13.2494 16.9723 13.25 17.8 13.25V14.75ZM12.6587 15.2975C13.0183 14.5919 13.5919 14.0183 14.2975 13.6587L14.9785 14.9952C14.5552 15.211 14.211 15.5552 13.9952 15.9785L12.6587 15.2975Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H11.1965C11.8638 21 12.1975 21 12.5147 20.9305C12.7961 20.8689 13.0671 20.767 13.3194 20.6282C13.6039 20.4716 13.855 20.2518 14.3573 19.8124L19.3608 15.4343C19.964 14.9065 20.2656 14.6426 20.4821 14.3236C20.674 14.041 20.8162 13.7277 20.9025 13.3971C21 13.0242 21 12.6234 21 11.8219V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
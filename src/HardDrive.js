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
    d: "M4.16473 7.75873C4.46277 6.41755 4.61179 5.74696 4.97241 5.24639C5.2905 4.80487 5.72269 4.45818 6.2227 4.24345C6.78957 4 7.47652 4 8.85042 4H15.1496C16.5235 4 17.2104 4 17.7773 4.24345C18.2773 4.45818 18.7095 4.80487 19.0276 5.24639C19.3882 5.74696 19.5372 6.41755 19.8353 7.75873L20.8857 12.4856C20.9285 12.6783 20.9499 12.7746 20.9649 12.8719C20.9783 12.9584 20.9878 13.0454 20.9935 13.1327C21 13.2309 21 13.3296 21 13.5269V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V13.5269C3 13.3296 3 13.2309 3.00645 13.1327C3.01219 13.0454 3.02174 12.9584 3.03508 12.8719C3.05008 12.7746 3.07149 12.6783 3.1143 12.4856L4.16473 7.75873Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 13H21",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 16.5H11",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
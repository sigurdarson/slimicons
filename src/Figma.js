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
    fill: "none",
    height: props.size || 24,
    viewBox: "0 0 24 24",
    width: props.size || 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "m9 2.25c-2.07107 0-3.75 1.67893-3.75 3.75 0 1.2267.58901 2.31583 1.49963 3-.91062.68417-1.49963 1.7733-1.49963 3s.58901 2.3158 1.49964 3c-.91063.6842-1.49964 1.7733-1.49964 3 0 2.0711 1.67893 3.75 3.75 3.75 2.0711 0 3.75-1.6789 3.75-3.75v-2.25-.7497c.6267.4707 1.4058.7497 2.25.7497 2.0711 0 3.75-1.6789 3.75-3.75 0-1.2267-.589-2.31583-1.4996-3 .9106-.68417 1.4996-1.7733 1.4996-3 0-2.07107-1.6789-3.75-3.75-3.75h-2.25-.75-.75zm6 6c1.2426 0 2.25-1.00736 2.25-2.25s-1.0074-2.25-2.25-2.25h-2.25v4.5zm-3.75 3.75v-2.25h-2.25c-1.24264 0-2.25 1.0074-2.25 2.25s1.00736 2.25 2.25 2.25h2.25zm1.5 0c0-1.2426 1.0074-2.25 2.25-2.25s2.25 1.0074 2.25 2.25-1.0074 2.25-2.25 2.25-2.25-1.0074-2.25-2.25zm-3.75-8.25h2.25v4.5h-2.25c-1.24264 0-2.25-1.00736-2.25-2.25s1.00736-2.25 2.25-2.25zm0 12h2.25v2.25c0 1.2426-1.0074 2.25-2.25 2.25-1.24264 0-2.25-1.0074-2.25-2.25s1.00736-2.25 2.25-2.25z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
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
    height: 24,
    viewBox: "0 0 24 24",
    width: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "m11.916 5.37597c.3447.22976.4378.69541.208 1.04006l-3.22261 4.83397h4.59861c.2766 0 .5307.1522.6613.3961.1305.2439.1162.5398-.0373.7699l-4 6c-.22973.3447-.69538.4378-1.04003.208-.34464-.2297-.43777-.6954-.20801-1.04l3.22264-4.834h-4.5986c-.2766 0-.53074-.1522-.66126-.3961-.13051-.2439-.11621-.5398.03722-.7699l4.00004-6.00002c.2297-.34465.6954-.43778 1.04-.20801zm10.084 3.87403c.4142 0 .75.33579.75.75v4c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-4c0-.41421.3358-.75.75-.75zm-19.25-.25c0-1.24264 1.00736-2.25 2.25-2.25h3c.41421 0 .75-.33578.75-.75 0-.41421-.33579-.75-.75-.75h-3c-2.07107 0-3.75 1.67894-3.75 3.75v6c0 2.0711 1.67893 3.75 3.75 3.75h1.5c.41421 0 .75-.3358.75-.75s-.33579-.75-.75-.75h-1.5c-1.24264 0-2.25-1.0074-2.25-2.25zm11.75-3.75c-.4142 0-.75.33579-.75.75 0 .41422.3358.75.75.75h1.5c1.2426 0 2.25 1.00736 2.25 2.25v6c0 1.2426-1.0074 2.25-2.25 2.25h-3c-.4142 0-.75.3358-.75.75s.3358.75.75.75h3c2.0711 0 3.75-1.6789 3.75-3.75v-6c0-2.07106-1.6789-3.75-3.75-3.75z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
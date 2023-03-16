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
    d: "m6.75001 7c0-1.79493 1.45508-3.25 3.24999-3.25 1.7949 0 3.25 1.45507 3.25 3.25s-1.4551 3.25-3.25 3.25c-1.79491 0-3.24999-1.45507-3.24999-3.25zm3.24999-4.75c-2.62334 0-4.74999 2.12665-4.74999 4.75s2.12665 4.75 4.74999 4.75c2.6234 0 4.75-2.12665 4.75-4.75s-2.1266-4.75-4.75-4.75zm-5.6865 16.1524c.98693-2.1566 3.16283-3.6524 5.6865-3.6524 2.5237 0 4.6996 1.4958 5.6865 3.6524.2078.4542.1134.8704-.1871 1.2142-.3195.3656-.873.6334-1.4994.6334h-7.99999c-.6264 0-1.17984-.2678-1.49941-.6334-.30047-.3438-.39492-.76-.1871-1.2142zm5.6865-5.1524c-3.13193 0-5.82838 1.8578-7.05046 4.5282-.48164 1.0525-.22026 2.0911.42167 2.8255.62282.7126 1.59835 1.1463 2.6288 1.1463h7.99999c1.0305 0 2.006-.4337 2.6288-1.1463.642-.7344.9033-1.773.4217-2.8255-1.2221-2.6704-3.9185-4.5282-7.0505-4.5282zm8-5c.4142 0 .75.33579.75.75v2.25h2.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.25v2.25c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.25h-2.25c-.4142 0-.75-.3358-.75-.75s.3358-.75.75-.75h2.25v-2.25c0-.41421.3358-.75.75-.75z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
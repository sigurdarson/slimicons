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
    d: "m10 3.75c-1.79493 0-3.25 1.45507-3.25 3.25s1.45507 3.25 3.25 3.25c1.7949 0 3.25-1.45507 3.25-3.25s-1.4551-3.25-3.25-3.25zm-4.75 3.25c0-2.62335 2.12665-4.75 4.75-4.75 2.6234 0 4.75 2.12665 4.75 4.75s-2.1266 4.75-4.75 4.75c-2.62335 0-4.75-2.12665-4.75-4.75zm4.75 7.75c-2.52369 0-4.69959 1.4958-5.68651 3.6524-.20782.4542-.11338.8704.18709 1.2142.31958.3656.87302.6334 1.49942.6334h8c.6264 0 1.1798-.2678 1.4994-.6334.3005-.3438.3949-.76.1871-1.2142-.9869-2.1566-3.1628-3.6524-5.6865-3.6524zm-7.05048 3.0282c1.22208-2.6704 3.91854-4.5282 7.05048-4.5282 3.1319 0 5.8284 1.8578 7.0505 4.5282.4816 1.0525.2202 2.0911-.4217 2.8255-.6228.7126-1.5983 1.1463-2.6288 1.1463h-8c-1.03045 0-2.00599-.4337-2.62881-1.1463-.64193-.7344-.9033-1.773-.42167-2.8255zm12.05048-6.5282c-.4142 0-.75.3358-.75.75s.3358.75.75.75h6c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
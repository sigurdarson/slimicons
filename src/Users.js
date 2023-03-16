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
    d: "m6.75 7c0-1.79493 1.45507-3.25 3.25-3.25 1.7949 0 3.25 1.45507 3.25 3.25s-1.4551 3.25-3.25 3.25c-1.79493 0-3.25-1.45507-3.25-3.25zm3.25-4.75c-2.62335 0-4.75 2.12665-4.75 4.75s2.12665 4.75 4.75 4.75c.7146 0 1.3923-.1578 2.0002-.4404.6083.2826 1.2863.4404 1.9998.4404 2.6234 0 4.75-2.12665 4.75-4.75s-2.1266-4.75-4.75-4.75c-.7132 0-1.3913.15767-1.9998.44042-.6079-.28263-1.2856-.44042-2.0002-.44042zm3.4996 1.53819c.7764.84557 1.2504 1.97334 1.2504 3.21181s-.474 2.36624-1.2504 3.2118c.163.0252.3301.0382.5004.0382 1.7949 0 3.25-1.45507 3.25-3.25s-1.4551-3.25-3.25-3.25c-.1704 0-.3375.01305-.5004.03819zm-3.4996 10.96181c-2.52369 0-4.69959 1.4958-5.68651 3.6524-.20782.4542-.11338.8704.18709 1.2142.31958.3656.87302.6334 1.49942.6334h1 5 2c.6264 0 1.1798-.2678 1.4994-.6334.3005-.3438.3949-.76.1871-1.2142-.9869-2.1566-3.1628-3.6524-5.6865-3.6524zm4 7h-2-5-1c-1.03045 0-2.00599-.4337-2.62881-1.1463-.64193-.7344-.9033-1.773-.42167-2.8255 1.22208-2.6704 3.91854-4.5282 7.05048-4.5282.6918 0 1.3623.0906 2.0003.2606.6387-.1701 1.3092-.2606 1.9997-.2606 3.1319 0 5.8284 1.8578 7.0505 4.5282.4816 1.0525.2202 2.0911-.4217 2.8255-.6228.7126-1.5983 1.1463-2.6288 1.1463zm.625-6.9691c2.2541.2238 4.1571 1.6452 5.0615 3.6215.2078.4542.1134.8704-.1871 1.2142-.3196.3656-.873.6334-1.4994.6334h-1.1069c.4398-.6957.566-1.5787.1574-2.4718-.5455-1.192-1.3848-2.2221-2.4255-2.9973z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
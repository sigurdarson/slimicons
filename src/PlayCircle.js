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
    d: "m3.75 12c0-4.55635 3.69365-8.25 8.25-8.25 4.5563 0 8.25 3.69365 8.25 8.25 0 4.5563-3.6937 8.25-8.25 8.25-4.55635 0-8.25-3.6937-8.25-8.25zm8.25-9.75c-5.38478 0-9.75 4.36522-9.75 9.75 0 5.3848 4.36522 9.75 9.75 9.75 5.3848 0 9.75-4.3652 9.75-9.75 0-5.38478-4.3652-9.75-9.75-9.75zm-.1545 5.644-.0292-.01822c-.3745-.23411-.6987-.43674-.9706-.5739-.2738-.13808-.6096-.27226-.98593-.242-.50289.04042-.96386.29592-1.26467.70093-.22512.30311-.28931.65899-.31731.96433-.02783.3033-.02781.68559-.02779 1.12728v.03438 4.2264.0344c-.00002.4417-.00004.824.02779 1.1273.028.3053.09219.6612.31731.9643.30081.405.76178.6605 1.26467.7009.37633.0303.71213-.1039.98593-.242.2719-.1371.5961-.3398.9706-.5739l.0292-.0182 3.3811-2.1132.0281-.0175c.3359-.21.6305-.3941.8535-.5635.2286-.1738.4746-.3984.6135-.7225.1887-.4402.1887-.9384 0-1.3786-.1389-.3241-.3849-.5487-.6135-.7225-.223-.1694-.5176-.3535-.8535-.5635l-.0281-.0175zm-2.03752.75016c.0399-.04787.09629-.07913.15804-.08759.01717.00406.07738.02067.20418.08461.2029.10235.4682.26727.8803.52482l3.3811 2.1132c.3723.2327.6074.3805.769.5033.1.076.1367.1172.1465.1292.0215.0569.0215.1197 0 .1766-.0098.012-.0465.0532-.1465.1292-.1616.1228-.3967.2706-.769.5033l-3.3811 2.1132c-.4121.2576-.6774.4225-.8803.5248-.1268.064-.18701.0806-.20418.0846-.06175-.0084-.11814-.0397-.15804-.0876-.00566-.0167-.0235-.0766-.03647-.218-.02076-.2263-.02151-.5386-.02151-1.0246v-4.2264c0-.48595.00075-.79832.02151-1.02465.01297-.14139.03081-.20128.03647-.21799z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
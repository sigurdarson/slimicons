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
    d: "m12.8309 2.88096c-.547-.12429-1.1149-.12429-1.6619 0-.6207.14105-1.18448.49376-2.00067 1.00435l-.10983.06869-5.44296 3.40185c-.05256.03131-.10169.06932-.146.1137-.14268.14243-.21946.3347-.21965.53045.00019.19575.07697.38801.21965.53044.04431.04439.09344.0824.146.11371l5.44296 3.40185.10983.0687c.81619.5106 1.37997.8633 2.00067 1.0043.547.1243 1.1149.1243 1.6619 0 .6207-.141 1.1846-.4937 2.0008-1.0043l.1098-.0687 5.4429-3.40184c.0527-.03137.1019-.06946.1463-.11396.2416-.24139.294-.62573.1053-.9277-.0307-.04908-.0661-.09339-.1053-.13271m-.1463-.11394-5.4429-3.40185-.1098-.06868c-.8162-.51059-1.3801-.86331-2.0008-1.00436m5.754 5.11904-4.4384-2.774c-.9696-.60598-1.3063-.8047-1.6479-.88232-.3282-.07458-.669-.07458-.9972 0-.3416.07762-.6783.27634-1.6479.88232l-4.43841 2.774 4.43841 2.774c.9696.606 1.3063.8047 1.6479.8823.3282.0746.669.0746.9972 0 .3416-.0776.6783-.2763 1.6479-.8823zm-14.18741 3.364c-.35125-.2195-.81396-.1128-1.0335.2385-.21953.3513-.11275.814.2385 1.0335l5.45601 3.41.10983.0687c.81619.5106 1.37997.8633 2.00067 1.0043.547.1243 1.1149.1243 1.6619 0 .6207-.141 1.1846-.4937 2.0008-1.0043l.1098-.0687 5.456-3.41c.3512-.2195.458-.6822.2385-1.0335s-.6823-.458-1.0335-.2385l-5.456 3.41c-.9696.606-1.3063.8047-1.6479.8823-.3282.0746-.669.0746-.9972 0-.3416-.0776-.6783-.2763-1.6479-.8823zm-1.0335 4.2385c.21954-.3513.68225-.458 1.0335-.2385l5.45601 3.41c.9696.606 1.3063.8047 1.6479.8823.3282.0746.669.0746.9972 0 .3416-.0776.6783-.2763 1.6479-.8823l5.456-3.41c.3512-.2195.814-.1128 1.0335.2385s.1127.814-.2385 1.0335l-5.456 3.41-.1098.0687c-.8162.5106-1.3801.8633-2.0008 1.0043-.547.1243-1.1149.1243-1.6619 0-.6207-.141-1.18448-.4937-2.00067-1.0043l-.10983-.0687-5.45601-3.41c-.35125-.2195-.45803-.6822-.2385-1.0335z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
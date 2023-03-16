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
    d: "m6.66319 2.24998.08681.00002.08682-.00002c.6132-.00015 1.03117-.00025 1.39477.07207 1.48759.2959 2.65041 1.45877 2.94631 2.94636.0724.3636.0723.78156.0721 1.39476v.00001.08682.08681.00002c.0002.61319.0003 1.03116-.0721 1.39476-.2959 1.48759-1.45872 2.65041-2.94631 2.94631-.3636.0724-.78156.0723-1.39476.0721h-.00002-.08681-.08681-.00002c-.61319.0002-1.03116.0003-1.39476-.0721-1.48759-.2959-2.65045-1.45872-2.94635-2.94631-.07233-.36361-.07223-.78157-.07207-1.39478l.00001-.08681-.00001-.08682c-.00016-.6132-.00026-1.03117.07207-1.39477.2959-1.48759 1.45876-2.65046 2.94635-2.94636.3636-.07232.78157-.07222 1.39478-.07207zm.08681 1.50002c-.73293 0-.98987.00363-1.18895.04323-.89256.17754-1.59028.87526-1.76782 1.76781-.0396.19909-.04323.45603-.04323 1.18896s.00363.98987.04323 1.18895c.17754.89255.87526 1.59027 1.76782 1.76781.19908.0396.45602.04324 1.18895.04324s.98987-.00364 1.18895-.04324c.89256-.17754 1.59028-.87526 1.76782-1.76781.0396-.19908.04323-.45602.04323-1.18895s-.00363-.98987-.04323-1.18896c-.17754-.89255-.87526-1.59027-1.76782-1.76781-.19908-.0396-.45602-.04323-1.18895-.04323zm-.08681 9h.08681.08682.00001c.6132-.0002 1.03116-.0003 1.39476.0721 1.48759.2959 2.65041 1.4587 2.94631 2.9463.0724.3636.0723.7816.0721 1.3948v.0868.0868c.0002.6132.0003 1.0312-.0721 1.3948-.2959 1.4876-1.45872 2.6504-2.94631 2.9463-.3636.0724-.78157.0723-1.39478.0721h-.08681-.08681c-.61321.0002-1.03117.0003-1.39478-.0721-1.48759-.2959-2.65045-1.4587-2.94635-2.9463-.07233-.3636-.07223-.7816-.07207-1.3948l.00001-.0868-.00001-.0868c-.00016-.6132-.00026-1.0312.07207-1.3948.2959-1.4876 1.45876-2.6504 2.94635-2.9463.3636-.0724.78156-.0723 1.39476-.0721zm.08681 1.5c-.73293 0-.98987.0036-1.18895.0432-.89256.1776-1.59028.8753-1.76782 1.7678-.0396.1991-.04323.4561-.04323 1.189s.00363.9899.04323 1.1889c.17754.8926.87526 1.5903 1.76782 1.7679.19908.0396.45602.0432 1.18895.0432s.98987-.0036 1.18895-.0432c.89256-.1776 1.59028-.8753 1.76782-1.7679.0396-.199.04323-.456.04323-1.1889s-.00363-.9899-.04323-1.189c-.17754-.8925-.87526-1.5902-1.76782-1.7678-.19908-.0396-.45602-.0432-1.18895-.0432zm10.5-12-.0868-.00002c-.6132-.00015-1.0312-.00025-1.3948.07207-1.4876.2959-2.6504 1.45877-2.9463 2.94636-.0724.3636-.0723.78156-.0721 1.39476v.00001.08682.08681.00002c-.0002.61319-.0003 1.03116.0721 1.39476.2959 1.48759 1.4587 2.65041 2.9463 2.94631.3636.0724.7816.0723 1.3948.0721h.0868.0868c.6132.0002 1.0312.0003 1.3948-.0721 1.4876-.2959 2.6504-1.45872 2.9463-2.94631.0724-.36361.0723-.78157.0721-1.39478v-.08681-.08682c.0002-.6132.0003-1.03117-.0721-1.39477-.2959-1.48759-1.4587-2.65046-2.9463-2.94636-.3636-.07232-.7816-.07222-1.3948-.07207zm-1.189 1.54323c.1991-.0396.4561-.04323 1.189-.04323s.9899.00363 1.189.04323c.8925.17754 1.5902.87526 1.7678 1.76781.0396.19909.0432.45603.0432 1.18896s-.0036.98987-.0432 1.18895c-.1776.89255-.8753 1.59027-1.7678 1.76781-.1991.0396-.4561.04324-1.189.04324s-.9899-.00364-1.189-.04324c-.8925-.17754-1.5902-.87526-1.7678-1.76781-.0396-.19908-.0432-.45602-.0432-1.18895s.0036-.98987.0432-1.18896c.1776-.89255.8753-1.59027 1.7678-1.76781zm1.189 9.95677c.4142 0 .75.3358.75.75v2.25h2.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.25v2.25c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.25h-2.25c-.4142 0-.75-.3358-.75-.75s.3358-.75.75-.75h2.25v-2.25c0-.4142.3358-.75.75-.75z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
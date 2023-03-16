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
    d: "m3.34835 3.34835c.70326-.70326 1.65709-1.09835 2.65165-1.09835s1.94839.39509 2.65165 1.09835 1.09835 1.65709 1.09835 2.65165v2.25h4.5v-2.25c0-.99456.3951-1.94839 1.0983-2.65165.7033-.70326 1.6571-1.09835 2.6517-1.09835s1.9484.39509 2.6517 1.09835c.7032.70326 1.0983 1.65709 1.0983 2.65165s-.3951 1.94839-1.0983 2.65165c-.7033.70326-1.6571 1.09835-2.6517 1.09835h-2.25v4.5h2.25c.9946 0 1.9484.3951 2.6517 1.0983.7032.7033 1.0983 1.6571 1.0983 2.6517s-.3951 1.9484-1.0983 2.6517c-.7033.7032-1.6571 1.0983-2.6517 1.0983s-1.9484-.3951-2.6517-1.0983c-.7032-.7033-1.0983-1.6571-1.0983-2.6517v-2.25h-4.5v2.25c0 .9946-.39509 1.9484-1.09835 2.6517-.70326.7032-1.65709 1.0983-2.65165 1.0983s-1.94839-.3951-2.65165-1.0983c-.70326-.7033-1.09835-1.6571-1.09835-2.6517s.39509-1.9484 1.09835-2.6517c.70326-.7032 1.65709-1.0983 2.65165-1.0983h2.25v-4.5h-2.25c-.99456 0-1.94839-.39509-2.65165-1.09835s-1.09835-1.65709-1.09835-2.65165.39509-1.94839 1.09835-2.65165zm4.90165 4.90165v-2.25c0-.59674-.23705-1.16903-.65901-1.59099s-.99425-.65901-1.59099-.65901-1.16903.23705-1.59099.65901-.65901.99425-.65901 1.59099.23705 1.16903.65901 1.59099.99425.65901 1.59099.65901zm1.5 1.5v4.5h4.5v-4.5zm-1.5 6h-2.25c-.59674 0-1.16903.2371-1.59099.659-.42196.422-.65901.9943-.65901 1.591s.23705 1.169.65901 1.591c.42196.4219.99425.659 1.59099.659s1.16903-.2371 1.59099-.659c.42196-.422.65901-.9943.65901-1.591zm7.5 0v2.25c0 .5967.2371 1.169.659 1.591.422.4219.9943.659 1.591.659s1.169-.2371 1.591-.659c.4219-.422.659-.9943.659-1.591s-.2371-1.169-.659-1.591c-.422-.4219-.9943-.659-1.591-.659zm0-7.5h2.25c.5967 0 1.169-.23705 1.591-.65901.4219-.42196.659-.99425.659-1.59099s-.2371-1.16903-.659-1.59099c-.422-.42196-.9943-.65901-1.591-.65901s-1.169.23705-1.591.65901c-.4219.42196-.659.99425-.659 1.59099z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
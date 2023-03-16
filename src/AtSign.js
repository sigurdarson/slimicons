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
    d: "m10.0979 2.43735c1.8913-.37621 3.8517-.18313 5.6333.55483 1.7815.73795 3.3043 1.98764 4.3756 3.59101 1.0714 1.60338 1.6432 3.48841 1.6432 5.41681v1.5c0 .862-.3424 1.6886-.9519 2.2981s-1.4361.9519-2.2981.9519c-.8619 0-1.6886-.3424-2.2981-.9519-.2236-.2236-.4113-.4764-.5593-.7495-.0896.1071-.1843.2106-.2838.3102-.8908.8908-2.099 1.3912-3.3588 1.3912s-2.46795-.5004-3.35875-1.3912-1.39125-2.099-1.39125-3.3588.50045-2.46795 1.39125-3.35875 2.09895-1.39125 3.35875-1.39125 2.468.50045 3.3588 1.39125 1.3912 2.09895 1.3912 3.35875v1.5c0 .4641.1844.9093.5126 1.2374.3282.3282.7733.5126 1.2374.5126s.9093-.1844 1.2374-.5126c.3282-.3281.5126-.7733.5126-1.2374v-1.5c0-1.6317-.4839-3.22674-1.3904-4.58345s-2.195-2.41413-3.7025-3.03855c-1.5074-.62442-3.1662-.7878-4.7666-.46947-1.60033.31832-3.07034 1.10406-4.22413 2.25784-1.15378 1.15379-1.93952 2.6238-2.25784 4.22413-.31833 1.6004-.15495 3.2592.46947 4.7666.62442 1.5075 1.68184 2.796 3.03855 3.7025s2.95175 1.3904 4.58345 1.3904h.0007c1.4483.0014 2.8708-.3793 4.1233-1.105.3584-.2076.8173-.0854 1.025.273.2076.3584.0854.8173-.273 1.025-1.4821.8586-3.1646 1.3087-4.8767 1.307l.0007-.75v.75c-.0002 0-.0005 0-.0007 0-1.9281-.0001-3.81293-.572-5.41611-1.6432-1.60337-1.0713-2.85306-2.5941-3.59101-4.3756-.73796-1.7816-.93104-3.742-.55483-5.6333.3762-1.89134 1.3048-3.62863 2.66836-4.99219s3.10085-2.29216 4.99219-2.66836zm5.1521 9.56265c0-.8619-.3424-1.6886-.9519-2.29809-.6095-.6095-1.4361-.95191-2.2981-.95191-.8619 0-1.6886.34241-2.29809.95191-.6095.60949-.95191 1.43619-.95191 2.29809 0 .862.34241 1.6886.95191 2.2981.60949.6095 1.43619.9519 2.29809.9519.862 0 1.6886-.3424 2.2981-.9519s.9519-1.4361.9519-2.2981z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
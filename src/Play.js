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
    d: "m12.3621 6.04895 2.0113 1.06484c1.2695.67208 2.269 1.20117 3.0007 1.67871.7316.47752 1.3129.97489 1.6171 1.6321.4627.9993.4627 2.1515 0 3.1508-.3042.6572-.8855 1.1546-1.6171 1.6321-.7318.4775-1.7312 1.0066-3.0007 1.6787l-2.0114 1.0649c-1.1331.5999-2.0298 1.0746-2.76141 1.3801-.73709.3077-1.4148.4926-2.08824.4042-1.03476-.1357-1.96616-.6964-2.57025-1.5475-.39315-.5538-.54686-1.2393-.61976-2.0347-.07235-.7895-.07235-1.8042-.07234-3.0863v-2.1338c-.00001-1.28214-.00001-2.29683.07234-3.08632.0729-.79543.22661-1.48088.61976-2.03473.60409-.851 1.53549-1.41178 2.57025-1.54749.67344-.08833 1.35115.09654 2.08824.40428.73161.30545 1.62841.78021 2.76151 1.38011zm-3.33943.00409c-.66253-.27661-1.04029-.33728-1.31526-.30122-.62085.08143-1.17969.41789-1.54215.9285-.16053.22614-.28366.58839-.34918 1.30335-.06533.71285-.06608 1.65859-.06608 2.98863v2.0554c0 1.33.00075 2.2758.06608 2.9886.06552.715.18865 1.0772.34918 1.3034.36246.5106.9213.8471 1.54215.9285.27497.036.65273-.0246 1.31526-.3012.66058-.2758 1.49673-.7177 2.67223-1.34l1.9412-1.0277c1.3127-.695 2.2509-1.1925 2.9182-1.628.6741-.4399.9551-.7455 1.0757-1.0061.2776-.5996.2776-1.2908 0-1.8904-.1206-.2606-.4016-.5662-1.0757-1.0061-.6673-.43553-1.6055-.93305-2.9182-1.62804l-1.9412-1.02766c-1.1755-.62233-2.01165-1.06416-2.67223-1.33996z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
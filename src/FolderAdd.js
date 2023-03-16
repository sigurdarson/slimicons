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
    d: "m9.53018 5.7541c-.06247-.00377-.13175-.0041-.33296-.0041h-1.39722c-.85245 0-1.44669.00059-1.90932.03838-.45387.03709-.71464.10622-.91216.20686-.42336.21571-.76757.55992-.98328.98328-.10064.19752-.16977.45829-.20686.91216-.0378.46263-.03838 1.05687-.03838 1.90932v4.4c0 .8525.00058 1.4467.03838 1.9093.03709.4539.10622.7147.20686.9122.21571.4233.55992.7676.98328.9833.19752.1006.45829.1697.91216.2068.46263.0378 1.05687.0384 1.90932.0384h8.4c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2157.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-1.4c0-.8525-.0006-1.4467-.0384-1.9093-.0371-.4539-.1062-.7147-.2068-.91218-.2158-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16977-.9122-.20686-.4626-.03779-1.0568-.03838-1.9093-.03838h-1.3972-.0227c-.1701.00002-.2874.00003-.4008-.00683-1.0926-.06603-2.1018-.60614-2.7628-1.4786-.0686-.09055-.1336-.18814-.228-.32973l-.0125-.01881c-.1116-.16742-.1503-.22488-.1881-.27477-.3966-.52347-1.0022-.84754-1.65772-.88716zm-.31031-1.5041h.00004c.17013-.00001.28739-.00002.40076.00683 1.09263.06603 2.10183.60614 2.76283 1.47861.0686.09052.1336.18809.2279.32964l.0001.00009.0125.01881c.1116.16741.1503.22488.1881.27476.3966.52348 1.0022.84755 1.6577.88716.0625.00378.1318.0041.333.0041h1.3972.0321c.8128 0 1.4685-.00001 1.9994.04337.5466.04466 1.0267.13902 1.471.36536.7056.35952 1.2792.9332 1.6388 1.63881.2263.44422.3207.92436.3653 1.47096.0434.5309.0434 1.1865.0434 1.9994v.0321 1.4.0321c0 .8129 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3596.7056-.9332 1.2793-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1865.0434-1.9994.0434h-.0321-8.4-.03212c-.81283 0-1.46844 0-1.99935-.0434-.54663-.0446-1.02678-.139-1.47099-.3653-.70561-.3595-1.27929-.9332-1.63881-1.6388-.22634-.4443-.3207-.9244-.36537-1.471-.04337-.5309-.04337-1.1865-.04336-1.9994v-.0321-4.4-.0321-.00001c-.00001-.81284-.00001-1.46845.04336-1.99935.04467-.54664.13903-1.02678.36537-1.471.35952-.70561.9332-1.27929 1.63881-1.63881.44421-.22634.92436-.3207 1.47099-.36536.53089-.04338 1.18648-.04337 1.99928-.04337h.00009.0321 1.39722zm-.96987 8.75c0-.4142.33579-.75.75-.75h2.25v-2.25c0-.41421.3358-.75.75-.75s.75.33579.75.75v2.25h2.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.25v2.25c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.25h-2.25c-.41421 0-.75-.3358-.75-.75z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
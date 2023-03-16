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
    d: "m12.2826 3.81217c-.2389-.05735-.5014-.06217-1.2708-.06217h-1.2118c-.85245 0-1.44669.00058-1.90932.03838-.45388.03709-.71464.10622-.91216.20686-.42336.21571-.76757.55992-.98328.98328-.10064.19752-.16977.45829-.20686.91216-.0378.46263-.03838 1.05687-.03838 1.90932v8.4c0 .8525.00058 1.4467.03838 1.9093.03709.4539.10622.7147.20686.9122.21571.4233.55992.7676.98328.9833.19752.1006.45828.1697.91216.2068.46263.0378 1.05687.0384 1.90932.0384h4.4c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2157.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-5.2118c0-.7694-.0048-1.03194-.0622-1.27081-.0551-.22958-.146-.44906-.2694-.65037-.1283-.20946-.3105-.39848-.8546-.94258l-3.1882-3.18822c-.5441-.5441-.7332-.7263-.9426-.85466-.2013-.12336-.4208-.21427-.6504-.26939zm-1.1854-1.56218c.6516-.00019 1.1026-.00032 1.5356.10362.3826.09187.7484.24338 1.0839.44899.3797.23266.6985.55166 1.1591 1.01251l.0604.06045 3.1882 3.18822.0605.06043c.4608.46059.7798.7794 1.0125 1.15906.2056.33552.3571.70132.449 1.08395.1039.43298.1038.88398.1036 1.53558v.0854 5.2118.0321c0 .8129 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3596.7056-.9332 1.2793-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1865.0434-1.9994.0434h-.0321-4.4-.03212c-.81283 0-1.46844 0-1.99935-.0434-.54663-.0446-1.02678-.139-1.47099-.3653-.70561-.3595-1.27929-.9332-1.63881-1.6388-.22634-.4443-.3207-.9244-.36537-1.471-.04337-.5309-.04337-1.1866-.04336-1.9994v-.0321-8.4-.0321c-.00001-.81284-.00001-1.46846.04336-1.99937.04467-.54663.13903-1.02677.36537-1.47099.35952-.70561.9332-1.27929 1.63881-1.63881.44421-.22634.92436-.3207 1.47099-.36536.53091-.04338 1.18653-.04338 1.99937-.04337h.0321 1.2118zm-2.8472 10.75001c0-.4142.33579-.75.75-.75h2.25v-2.25c0-.41421.3358-.75.75-.75s.75.33579.75.75v2.25h2.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.25v2.25c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.25h-2.25c-.41421 0-.75-.3358-.75-.75z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
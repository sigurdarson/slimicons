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
    d: "m11.8842 2.24997.1158.00003.1158-.00003c.818-.00026 1.3761-.00045 1.8548.12781 1.2941.34675 2.3049 1.35755 2.6516 2.65165.0921.34364.118.72826.1252 1.22057h1.2526.75 2.25c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-2.25v8.45.0321c0 .8129 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3596.7056-.9332 1.2793-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1865.0434-1.9994.0434h-.0321-2.4-.0321c-.81285 0-1.46846 0-1.99937-.0434-.54663-.0446-1.02678-.139-1.47099-.3653-.70561-.3595-1.27929-.9332-1.63881-1.6388-.22635-.4443-.3207-.9244-.36537-1.471-.04337-.5309-.04337-1.1866-.04336-1.9994v-.0321-8.45h-2.25c-.41421 0-.75-.33579-.75-.75s.33579-.75.75-.75h2.25.75 1.25265c.00717-.49231.03305-.87693.12513-1.22057.34675-1.2941 1.35755-2.3049 2.65162-2.65165.4787-.12826 1.0368-.12807 1.8548-.12781zm-3.13053 4.00003h6.49263c-.0066-.43497-.0248-.65248-.073-.83234-.208-.77646-.8145-1.38294-1.591-1.59099-.262-.07023-.604-.07667-1.5823-.07667s-1.3203.00644-1.5823.07667c-.7765.20805-1.38298.81453-1.59103 1.59099-.0482.17986-.06635.39737-.073.83234zm-2.00367 1.5v8.45c0 .8525.00058 1.4467.03838 1.9093.03708.4539.10622.7147.20686.9122.21571.4233.55992.7675.98328.9833.19752.1006.45828.1697.91216.2068.46263.0378 1.05687.0384 1.90932.0384h2.4c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2158.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-8.45h-1.25-8z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
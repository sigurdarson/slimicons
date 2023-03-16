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
    d: "m7.8 2.25h-.0321-.00002c-.81283-.00001-1.46844-.00001-1.99935.04336-.54663.04467-1.02678.13903-1.47099.36537-.70561.35952-1.27929.9332-1.63881 1.63881-.22634.44421-.3207.92436-.36537 1.47099-.04337.53091-.04337 1.18652-.04336 1.99935v.00002.0321 2.2c0 .4142.33579.75.75.75s.75-.3358.75-.75v-2.2c0-.85245.00058-1.44669.03838-1.90932.03709-.45387.10622-.71464.20686-.91216.21571-.42336.55992-.76757.98328-.98328.19752-.10064.45829-.16977.91216-.20686.46263-.0378 1.05687-.03838 1.90932-.03838h2.2c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75zm-4.8 11c.41421 0 .75.3358.75.75v2.2c0 .8525.00058 1.4467.03838 1.9093.03709.4539.10622.7147.20686.9122.21571.4233.55992.7675.98328.9833.19752.1006.45829.1697.91216.2068.46263.0378 1.05687.0384 1.90932.0384h2.2c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.2-.0321c-.81284 0-1.46846 0-1.99937-.0434-.54663-.0446-1.02678-.139-1.47099-.3653-.70561-.3596-1.27929-.9332-1.63881-1.6388-.22634-.4443-.3207-.9244-.36537-1.471-.04337-.5309-.04337-1.1866-.04336-1.9994v-.0321-2.2c0-.4142.33579-.75.75-.75zm18 0c.4142 0 .75.3358.75.75v2.2.0321c0 .8128 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3596.7056-.9332 1.2792-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1866.0434-1.9994.0434h-.0321-2.2c-.4142 0-.75-.3358-.75-.75s.3358-.75.75-.75h2.2c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2158.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-2.2c0-.4142.3358-.75.75-.75zm-2.8907-9.46162c-.4626-.0378-1.0568-.03838-1.9093-.03838h-2.2c-.4142 0-.75-.33579-.75-.75s.3358-.75.75-.75h2.2.0321c.8129-.00001 1.4685-.00001 1.9994.04336.5466.04467 1.0267.13903 1.471.36537.7056.35952 1.2792.9332 1.6388 1.63881.2263.44421.3207.92436.3653 1.47099.0434.53091.0434 1.18653.0434 1.99937v.0321 2.2c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.2c0-.85245-.0006-1.44669-.0384-1.90932-.0371-.45387-.1062-.71464-.2068-.91216-.2158-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16977-.9122-.20686zm-6.1093 3.46162-.1158-.00002c-.818-.00027-1.3761-.00046-1.8548.1278-1.29407.34675-2.30487 1.35755-2.65162 2.65162-.12826.4787-.12807 1.0368-.1278 1.8548l.00002.1158-.00002.1158c-.00027.818-.00046 1.3761.1278 1.8548.34675 1.2941 1.35755 2.3049 2.65162 2.6516.4787.1283 1.0368.1281 1.8548.1278h.1158.1158c.818.0003 1.3761.0005 1.8548-.1278 1.2941-.3467 2.3049-1.3575 2.6516-2.6516.1283-.4787.1281-1.0368.1278-1.8548v-.1158-.1158c.0003-.818.0005-1.3761-.1278-1.8548-.3467-1.29407-1.3575-2.30487-2.6516-2.65162-.4787-.12826-1.0368-.12807-1.8548-.1278zm-1.5823 1.57667c.262-.07023.604-.07667 1.5823-.07667s1.3203.00644 1.5823.07667c.7765.20805 1.383.81453 1.591 1.59103.0703.262.0767.604.0767 1.5823s-.0064 1.3203-.0767 1.5823c-.208.7765-.8145 1.383-1.591 1.591-.262.0703-.604.0767-1.5823.0767s-1.3203-.0064-1.5823-.0767c-.7765-.208-1.38298-.8145-1.59103-1.591-.07023-.262-.07667-.604-.07667-1.5823s.00644-1.3203.07667-1.5823c.20805-.7765.81453-1.38298 1.59103-1.59103z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
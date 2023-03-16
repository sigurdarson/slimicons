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
    d: "m11.0118 3.75c.7694 0 1.0319.00482 1.2708.06217.2296.05512.4491.14603.6504.26939.2094.12836.3985.31056.9426.85466l3.1882 3.18822c.5441.5441.7263.73312.8546.94258.1234.20131.2143.42079.2694.65037.0574.23887.0622.50141.0622 1.27081v5.2118c0 .8525-.0006 1.4467-.0384 1.9093-.0371.4539-.1062.7147-.2068.9122-.2158.4233-.56.7676-.9833.9833-.1975.1006-.4583.1697-.9122.2068-.4626.0378-1.0568.0384-1.9093.0384h-4.4c-.85245 0-1.44669-.0006-1.90932-.0384-.45388-.0371-.71464-.1062-.91216-.2068-.42336-.2157-.76757-.56-.98328-.9833-.10064-.1975-.16977-.4583-.20686-.9122-.0378-.4626-.03838-1.0568-.03838-1.9093v-8.4c0-.85245.00058-1.44669.03838-1.90932.03709-.45387.10622-.71464.20686-.91216.21571-.42336.55992-.76757.98328-.98328.19752-.10064.45828-.16977.91216-.20686.46263-.0378 1.05687-.03838 1.90932-.03838zm1.621-1.39639c-.433-.10394-.884-.10381-1.5356-.10362l-.0854.00001h-1.2118-.0321c-.81284-.00001-1.46846-.00001-1.99937.04337-.54663.04466-1.02678.13902-1.47099.36536-.70561.35952-1.27929.9332-1.63881 1.63881-.22634.44422-.3207.92436-.36537 1.47099-.04337.53091-.04337 1.18653-.04336 1.99937v.0321 8.4.0321c-.00001.8128-.00001 1.4685.04336 1.9994.04467.5466.13903 1.0267.36537 1.471.35952.7056.9332 1.2793 1.63881 1.6388.44421.2263.92436.3207 1.47099.3653.53091.0434 1.18652.0434 1.99935.0434h.03212 4.4.0321c.8129 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3595 1.2792-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0434-.5309.0434-1.1865.0434-1.9994v-.0321-5.2118-.0854c.0002-.6516.0003-1.1026-.1036-1.53558-.0919-.38263-.2434-.74843-.449-1.08395-.2327-.37966-.5517-.69847-1.0125-1.15906l-.0605-.06043-3.1882-3.18822-.0604-.06045c-.4606-.46085-.7794-.77985-1.1591-1.01251-.3355-.20561-.7013-.35712-1.0839-.44899zm-2.8828 12.64639c0-.4142-.33579-.75-.75-.75s-.75.3358-.75.75v2c0 .4142.33579.75.75.75s.75-.3358.75-.75zm2.25-3.75c.4142 0 .75.3358.75.75v5c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-5c0-.4142.3358-.75.75-.75zm3.75-1.25c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v7c0 .4142.3358.75.75.75s.75-.3358.75-.75z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
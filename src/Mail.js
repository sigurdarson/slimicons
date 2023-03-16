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
    d: "m7.8 4.25h-.0321c-.81284-.00001-1.46846-.00001-1.99937.04336-.54663.04467-1.02678.13903-1.47099.36537-.70561.35952-1.27929.9332-1.63881 1.63881-.22634.44421-.3207.92436-.36537 1.47099-.04337.53091-.04337 1.18652-.04336 1.99935v.00002.0321 4.4.0321c-.00001.8129-.00001 1.4685.04336 1.9994.04467.5466.13903 1.0267.36537 1.471.35952.7056.9332 1.2792 1.63881 1.6388.44421.2263.92436.3207 1.47099.3653.53091.0434 1.18652.0434 1.99935.0434h.03212 8.4.0321c.8129 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3596 1.2792-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0434-.5309.0434-1.1865.0434-1.9994v-.0321-4.4-.03212c0-.81283 0-1.46844-.0434-1.99935-.0446-.54663-.139-1.02678-.3653-1.47099-.3596-.70561-.9332-1.27929-1.6388-1.63881-.4443-.22634-.9244-.3207-1.471-.36537-.5309-.04337-1.1866-.04337-1.9994-.04336h-.0321zm-2.82148 1.74524c.19752-.10064.45829-.16977.91216-.20686.46263-.0378 1.05687-.03838 1.90932-.03838h8.4c.8525 0 1.4467.00058 1.9093.03838.4539.03709.7147.10622.9122.20686.2021.10296.3861.2352.5467.39135-.0346.02442-.0676.05211-.0985.08308l-4.6059 4.60593c-.6028.6027-1.0234 1.0225-1.3773 1.3229-.3471.2947-.5804.4302-.7912.4987-.4519.1469-.9387.1469-1.3906 0-.2108-.0685-.4441-.204-.7912-.4987-.3539-.3004-.77451-.7202-1.37728-1.3229l-4.60589-4.60593c-.03097-.03097-.06397-.05866-.09858-.08308.16065-.15615.34469-.28839.54677-.39135zm-1.18688 1.85705c-.00112.01264-.0022.02544-.00326.03839-.0378.46263-.03838 1.05687-.03838 1.90932v4.4c0 .8525.00058 1.4467.03838 1.9093.03709.4539.10622.7147.20686.9122.21571.4233.55992.7675.98328.9833.19752.1006.45829.1697.91216.2068.46263.0378 1.05687.0384 1.90932.0384h8.4c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2158.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-4.4c0-.85245-.0006-1.44669-.0384-1.90932-.001-.01295-.0021-.02574-.0032-.03838l-4.284 4.2839-.0227.0227-.0001.0001c-.5747.5747-1.0382 1.0383-1.4443 1.383-.4181.355-.8243.6278-1.2985.7818-.7531.2447-1.5645.2447-2.3176 0-.4742-.154-.8804-.4268-1.29851-.7818-.40608-.3447-.86966-.8083-1.4444-1.3831h-.00003l-.0227-.0227z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
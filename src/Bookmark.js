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
    d: "m10.7679 2.25h2.4642c.8128-.00001 1.4685-.00001 1.9994.04336.5466.04467 1.0267.13903 1.471.36537.7056.35952 1.2793.9332 1.6388 1.63881.2263.44421.3207.92436.3653 1.47099.0434.53091.0434 1.18652.0434 1.99935v10.06732c0 .4849 0 .8998-.0297 1.2256-.0294.3222-.0965.7039-.3424 1.0181-.3239.4136-.8164.6598-1.3415.6707-.3989.0083-.7445-.167-1.02-.3369-.2784-.1717-.6103-.4206-.9982-.7116l-.5882-.4411c-1.0862-.8146-1.4664-1.083-1.8572-1.1859-.3755-.0988-.7701-.0988-1.1456 0-.3908.1029-.771.3713-1.8572 1.1859l-.58818.4411c-.38789.291-.71978.5399-.99824.7116-.27544.1699-.62107.3452-1.01996.3369-.52516-.0109-1.01765-.2571-1.34149-.6707-.24597-.3142-.31306-.6959-.34245-1.0181-.02971-.3258-.0297-.7407-.02968-1.2256v-10.0673c-.00001-.81284-.00001-1.46846.04337-1.99937.04466-.54663.13902-1.02678.36536-1.47099.35952-.70561.9332-1.27929 1.63881-1.63881.44422-.22634.92436-.3207 1.47099-.36537.53091-.04337 1.18653-.04337 1.99937-.04336zm-1.87722 1.53838c-.45387.03709-.71464.10622-.91216.20686-.42336.21571-.76757.55992-.98328.98328-.10064.19752-.16977.45828-.20686.91216-.0378.46263-.03838 1.05687-.03838 1.90932v10c0 .5299.00075.8753.02348 1.1245.01437.1575.03438.224.04061.2426.04225.047.10079.0763.16374.0819.01863-.0062.08387-.0301.21847-.1131.21301-.1313.48976-.3379.9137-.6559l.56-.42c.04215-.0316.08369-.0628.12466-.0936.91106-.6839 1.53934-1.1556 2.25074-1.3429.6257-.1647 1.2835-.1647 1.9092 0 .7114.1873 1.3397.659 2.2507 1.3429.041.0308.0826.062.1247.0936l.56.42c.4239.318.7007.5246.9137.6559.1346.083.1998.1069.2185.1131.0629-.0056.1215-.0349.1637-.0819.0062-.0186.0263-.0851.0406-.2426.0228-.2492.0235-.5946.0235-1.1245v-10c0-.85245-.0006-1.44669-.0384-1.90932-.0371-.45388-.1062-.71464-.2068-.91216-.2157-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16977-.9122-.20686-.4626-.0378-1.0568-.03838-1.9093-.03838h-2.4c-.85245 0-1.44669.00058-1.90932.03838z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
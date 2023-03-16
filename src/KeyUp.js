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
    d: "m7.7679 2.25h.0321 8.4.0321c.8129-.00001 1.4685-.00001 1.9994.04336.5466.04467 1.0267.13903 1.471.36537.7056.35952 1.2792.9332 1.6388 1.63881.2263.44421.3207.92436.3653 1.47099.0434.53091.0434 1.18652.0434 1.99935v.03212 8.4.0321c0 .8129 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3596.7056-.9332 1.2792-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1865.0434-1.9994.0434h-.0321-8.4-.03212c-.81283 0-1.46844 0-1.99935-.0434-.54663-.0446-1.02678-.139-1.47099-.3653-.70561-.3596-1.27929-.9332-1.63881-1.6388-.22634-.4443-.3207-.9244-.36537-1.471-.04337-.5309-.04337-1.1865-.04336-1.9994v-.0321-8.4-.0321-.00002c-.00001-.81283-.00001-1.46844.04336-1.99935.04467-.54663.13903-1.02678.36537-1.47099.35952-.70561.9332-1.27929 1.63881-1.63881.44421-.22634.92436-.3207 1.47099-.36537.53091-.04337 1.18652-.04337 1.99935-.04336zm-1.87722 1.53838c-.45387.03709-.71464.10622-.91216.20686-.42336.21571-.76757.55992-.98328.98328-.10064.19752-.16977.45829-.20686.91216-.0378.46263-.03838 1.05687-.03838 1.90932v8.4c0 .8525.00058 1.4467.03838 1.9093.03709.4539.10622.7147.20686.9122.21571.4233.55992.7675.98328.9833.19752.1006.45829.1697.91216.2068.46263.0378 1.05687.0384 1.90932.0384h8.4c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2158.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-8.4c0-.85245-.0006-1.44669-.0384-1.90932-.0371-.45387-.1062-.71464-.2068-.91216-.2158-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16977-.9122-.20686-.4626-.0378-1.0568-.03838-1.9093-.03838h-8.4c-.85245 0-1.44669.00058-1.90932.03838zm6.85932 5.33351c.1969.07375.4191.21012.7365.4796.3539.3004.7745.72021 1.3773 1.32291l1.6059 1.6059c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-1.6059-1.60592-.0227-.02272v-.00002c-.5747-.57475-1.0383-1.03833-1.4444-1.38306-.4181-.35495-.8243-.62774-1.2985-.7818-.7531-.24472-1.5645-.24472-2.3176 0-.4742.15406-.8804.42685-1.29851.7818-.40609.34474-.86967.80833-1.44443 1.3831l-.0227.0227-1.60589 1.60592c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l1.60589-1.6059c.60277-.6027 1.02338-1.02251 1.37728-1.32291.3174-.26948.5396-.40585.7365-.4796v7.87811c0 .4142.3358.75.75.75s.75-.3358.75-.75z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
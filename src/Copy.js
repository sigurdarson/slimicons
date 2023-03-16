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
    d: "m13.8 2.25h-.0321c-.8128-.00001-1.4685-.00001-1.9994.04336-.5466.04467-1.0267.13902-1.471.36537-.70557.35952-1.27925.9332-1.63877 1.63881-.22634.44421-.3207.92435-.36537 1.47099-.04337.53091-.04337 1.18651-.04336 1.99934v.00002.03211.45h-.45-.0321-.00003c-.81283-.00001-1.46843-.00001-1.99934.04336-.54663.04467-1.02678.13902-1.47099.36537-.70561.35952-1.27929.9332-1.63881 1.63877-.22634.4443-.3207.9244-.36537 1.471-.04337.5309-.04337 1.1866-.04336 1.9994v.0321 2.4.0321c-.00001.8128-.00001 1.4685.04336 1.9994.04467.5466.13903 1.0267.36537 1.471.35952.7056.9332 1.2792 1.63881 1.6388.44421.2263.92436.3207 1.47099.3653.53091.0434 1.18652.0434 1.99935.0434h.03212 2.4.0321c.8129 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3596 1.2792-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0434-.5309.0434-1.1865.0434-1.9994v-.0321-.45h.45.0321c.8129 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3596 1.2793-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0434-.5309.0434-1.1865.0434-1.9994v-.0321-2.4-.03212c0-.81283 0-1.46844-.0434-1.99935-.0446-.54664-.139-1.02678-.3653-1.47099-.3595-.70561-.9332-1.27929-1.6388-1.63881-.4443-.22635-.9244-.3207-1.471-.36537-.5309-.04337-1.1865-.04337-1.9994-.04336h-.0321zm1.95 12h.45c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2158.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-2.4c0-.85245-.0006-1.44669-.0384-1.90932-.0371-.45388-.1062-.71464-.2068-.91216-.2158-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16978-.9122-.20686-.4626-.0378-1.0568-.03838-1.9093-.03838h-2.4c-.8525 0-1.4467.00058-1.9093.03838-.4539.03708-.7147.10622-.9122.20686-.4233.21571-.7675.55992-.98326.98328-.10064.19752-.16977.45828-.20686.91216-.0378.46263-.03838 1.05687-.03838 1.90932v.45h.45.0321c.8129-.00001 1.4685-.00001 1.9994.04336.5466.04467 1.0267.13902 1.471.36537.7056.35952 1.2792.9332 1.6388 1.63877.2263.4443.3207.9244.3653 1.471.0434.5309.0434 1.1865.0434 1.9994v.0321zm-10.77148-4.25476c.19752-.10064.45829-.16978.91216-.20686.46263-.0378 1.05687-.03838 1.90932-.03838h2.4c.8525 0 1.4467.00058 1.9093.03838.4539.03708.7147.10622.9122.20686.4233.21576.7675.55996.9833.98326.1006.1975.1697.4583.2068.9122.0378.4626.0384 1.0568.0384 1.9093v2.4c0 .8525-.0006 1.4467-.0384 1.9093-.0371.4539-.1062.7147-.2068.9122-.2158.4233-.56.7675-.9833.9833-.1975.1006-.4583.1697-.9122.2068-.4626.0378-1.0568.0384-1.9093.0384h-2.4c-.85245 0-1.44669-.0006-1.90932-.0384-.45387-.0371-.71464-.1062-.91216-.2068-.42336-.2158-.76757-.56-.98328-.9833-.10064-.1975-.16977-.4583-.20686-.9122-.0378-.4626-.03838-1.0568-.03838-1.9093v-2.4c0-.8525.00058-1.4467.03838-1.9093.03709-.4539.10622-.7147.20686-.9122.21571-.4233.55992-.7675.98328-.98326z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
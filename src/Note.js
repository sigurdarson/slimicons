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
    d: "m7.8 2.25h-.0321-.00002c-.81283-.00001-1.46844-.00001-1.99935.04336-.54663.04467-1.02678.13903-1.47099.36537-.70561.35952-1.27929.9332-1.63881 1.63881-.22634.44421-.3207.92436-.36537 1.47099-.04337.53091-.04337 1.18652-.04336 1.99935v.00002.0321 8.4.0321c-.00001.8129-.00001 1.4685.04336 1.9994.04467.5466.13903 1.0267.36537 1.471.35952.7056.9332 1.2792 1.63881 1.6388.44421.2263.92436.3207 1.47099.3653.53091.0434 1.18652.0434 1.99935.0434h.03212 3.3965.0775c.5929.0002 1.0034.0003 1.4012-.0869.3517-.077.6905-.2043 1.0059-.3779.3567-.1964.6656-.4668 1.1118-.8574l.0583-.051 5.0035-4.3781.0705-.0617c.5354-.4682.9059-.7921 1.1775-1.1921.2398-.3533.4175-.745.5255-1.1581.1222-.4678.122-.9599.1218-1.6712v-.0937-4.0219-.03212c0-.81283 0-1.46844-.0434-1.99935-.0446-.54663-.139-1.02678-.3653-1.47099-.3596-.70561-.9332-1.27929-1.6388-1.63881-.4443-.22634-.9244-.3207-1.471-.36537-.5309-.04337-1.1865-.04337-1.9994-.04336h-.0321zm-2.82148 1.74524c.19752-.10064.45829-.16977.91216-.20686.46263-.0378 1.05687-.03838 1.90932-.03838h8.4c.8525 0 1.4467.00058 1.9093.03838.4539.03709.7147.10622.9122.20686.4233.21571.7675.55992.9833.98328.1006.19752.1697.45829.2068.91216.0378.46263.0384 1.05687.0384 1.90932v4.0219c0 .8408-.0057 1.1277-.0731 1.3856-.0052.02-.0107.0399-.0165.0597-.0517-.0113-.1053-.0172-.1604-.0172h-2.2-.0321c-.8128 0-1.4685 0-1.9994.0434-.5466.0446-1.0267.139-1.471.3653-.7056.3596-1.2792.9332-1.6388 1.6388-.2263.4443-.3207.9244-.3653 1.471-.0434.5309-.0434 1.1866-.0434 1.9994v.0321 1.4171c-.1996.03-.4615.0329-1.0535.0329h-3.3965c-.85245 0-1.44669-.0006-1.90932-.0384-.45387-.0371-.71464-.1062-.91216-.2068-.42336-.2158-.76757-.56-.98328-.9833-.10064-.1975-.16977-.4583-.20686-.9122-.0378-.4626-.03838-1.0568-.03838-1.9093v-8.4c0-.85245.00058-1.44669.03838-1.90932.03709-.45387.10622-.71464.20686-.91216.21571-.42336.55992-.76757.98328-.98328zm8.77148 15.35186c.0359-.0314.0737-.0644.1134-.0992l5.0035-4.3781c.048-.0419.0935-.0818.1368-.1198h-1.2037c-.8525 0-1.4467.0006-1.9093.0384-.4539.0371-.7147.1062-.9122.2068-.4233.2158-.7675.56-.9833.9833-.1006.1975-.1697.4583-.2068.9122-.0378.4626-.0384 1.0568-.0384 1.9093z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
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
    d: "m9.19722 5.75c.20121 0 .27049.00033.33296.0041.65552.03962 1.26112.36369 1.65772.88716.0378.04989.0765.10735.1881.27477l.0125.01881c.0944.14159.1594.23918.228.32973.661.87246 1.6702 1.41257 2.7628 1.4786.1134.00686.2307.00685.4008.00683h.0227 1.3972c.8525 0 1.4467.00059 1.9093.03838.4539.03709.7147.10622.9122.20686.4233.21571.7675.55992.9833.98328.1006.19748.1697.45828.2068.91218.0378.4626.0384 1.0568.0384 1.9093v1.4c0 .8525-.0006 1.4467-.0384 1.9093-.0371.4539-.1062.7147-.2068.9122-.2158.4233-.56.7676-.9833.9833-.1975.1006-.4583.1697-.9122.2068-.4626.0378-1.0568.0384-1.9093.0384h-8.4c-.85246 0-1.44669-.0006-1.90932-.0384-.45388-.0371-.71464-.1062-.91216-.2068-.42336-.2157-.76757-.56-.98328-.9833-.10064-.1975-.16978-.4583-.20686-.9122-.0378-.4626-.03838-1.0568-.03838-1.9093v-4.4c0-.85245.00058-1.44669.03838-1.90932.03708-.45387.10622-.71464.20686-.91216.21571-.42336.55992-.76757.98328-.98328.19752-.10064.45828-.16977.91216-.20686.46263-.03779 1.05687-.03838 1.90932-.03838zm.02269-1.5h-.00005-.02264-1.39722-.03211-.00008c-.8128 0-1.46839-.00001-1.99928.04337-.54664.04466-1.02678.13902-1.47099.36536-.70561.35952-1.27929.9332-1.63881 1.63881-.22635.44422-.3207.92436-.36537 1.471-.04337.5309-.04337 1.18651-.04336 1.99935v.00001.0321 4.4.0321c-.00001.8129-.00001 1.4685.04336 1.9994.04467.5466.13902 1.0267.36537 1.471.35952.7056.9332 1.2793 1.63881 1.6388.44421.2263.92435.3207 1.47099.3653.53091.0434 1.18651.0434 1.99935.0434h.03212 8.4.0321c.8129 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3595 1.2792-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0434-.5309.0434-1.1865.0434-1.9994v-.0321-1.4-.0321c0-.8129 0-1.4685-.0434-1.9994-.0446-.5466-.139-1.02674-.3653-1.47096-.3596-.70561-.9332-1.27929-1.6388-1.63881-.4443-.22634-.9244-.3207-1.471-.36536-.5309-.04338-1.1866-.04337-1.9994-.04337h-.0321-1.3972c-.2012 0-.2705-.00032-.333-.0041-.6555-.03961-1.2611-.36368-1.6577-.88716-.0378-.04988-.0765-.10735-.1881-.27476l-.0125-.01881-.0001-.00009c-.0943-.14155-.1593-.23912-.2279-.32964-.661-.87247-1.6702-1.41258-2.76283-1.47861-.11337-.00685-.23063-.00684-.40076-.00683zm-.21991 8c-.41421 0-.75.3358-.75.75s.33579.75.75.75h6c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
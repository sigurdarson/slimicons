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
    d: "m7.33755 4.30894c.30652-1.18429 1.38234-2.05894 2.66245-2.05894h4c1.2801 0 2.3559.87465 2.6624 2.05894 1.5999.28654 2.8416 1.57693 3.0555 3.20159.0322.24459.0322.52292.0321.93158v.00003.05786 7.7.0321c0 .8129 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3596.7056-.9332 1.2793-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1865.0434-1.9994.0434h-.0321-4.4-.03213c-.81283 0-1.46844 0-1.99934-.0434-.54664-.0446-1.02678-.139-1.471-.3653-.7056-.3595-1.27928-.9332-1.63881-1.6388-.22634-.4443-.3207-.9244-.36536-1.471-.04338-.5309-.04337-1.1866-.04336-1.9994v-.0321-7.7l-.00001-.05786c-.00007-.40868-.00011-.68702.03209-.93161.21389-1.62466 1.45558-2.91505 3.05547-3.20159zm.04216 1.52812c-.85075.24354-1.49225.97131-1.61046 1.86926-.01764.13392-.01925.30542-.01925.79368v7.7c0 .8525.00058 1.4467.03838 1.9093.03708.4539.10621.7147.20685.9122.21572.4233.55992.7675.98329.9833.19752.1006.45828.1697.91216.2068.46263.0378 1.05686.0384 1.90932.0384h4.4c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2158.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-7.7c0-.48826-.0016-.65976-.0193-.79368-.1182-.89795-.7597-1.62572-1.6104-1.86926-.3541 1.10947-1.3934 1.91294-2.6203 1.91294h-4c-1.22691 0-2.26617-.80347-2.62029-1.91294zm2.62029-2.08706c-.69036 0-1.25.55964-1.25 1.25s.55964 1.25 1.25 1.25h4c.6904 0 1.25-.55964 1.25-1.25s-.5596-1.25-1.25-1.25zm-2.75 7.25c0-.4142.33578-.75.75-.75h8c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-8c-.41422 0-.75-.3358-.75-.75zm.75 2.25c-.41422 0-.75.3358-.75.75s.33578.75.75.75h8c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75zm-.75 3.75c0-.4142.33578-.75.75-.75h6c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-6c-.41422 0-.75-.3358-.75-.75z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
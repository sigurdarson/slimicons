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
    d: "m8.75 3c0-.41421-.33579-.75-.75-.75s-.75.33579-.75.75v4.25h-4.25c-.41421 0-.75.33579-.75.75s.33579.75.75.75h4.25v2.45.0321c-.00001.8128-.00001 1.4685.04336 1.9994.04467.5466.13902 1.0267.36537 1.471.35952.7056.9332 1.2792 1.63881 1.6388.44421.2263.92436.3207 1.47096.3653.5309.0434 1.1865.0434 1.9994.0434h.0321 2.45v4.25c0 .4142.3358.75.75.75s.75-.3358.75-.75v-4.25h4.25c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75h-4.25v-2.45-.0321c0-.8129 0-1.4685-.0434-1.9994-.0446-.5466-.139-1.02675-.3653-1.47096-.3596-.70561-.9332-1.27929-1.6388-1.63881-.4443-.22635-.9244-.3207-1.471-.36537-.5309-.04337-1.1866-.04337-1.9994-.04336h-.0321-2.45zm0 5.75v2.45c0 .8525.00058 1.4467.03838 1.9093.03708.4539.10622.7147.20686.9122.21571.4233.55992.7675.98328.9833.19748.1006.45828.1697.91218.2068.4626.0378 1.0568.0384 1.9093.0384h2.45v-2.45c0-.8525-.0006-1.4467-.0384-1.9093-.0371-.4539-.1062-.7147-.2068-.91218-.2158-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16978-.9122-.20686-.4626-.0378-1.0568-.03838-1.9093-.03838z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
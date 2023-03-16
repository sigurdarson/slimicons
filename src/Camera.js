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
    d: "m10.8028 3.25h-.0227c-.1701-.00001-.2874-.00002-.4008.00683-1.09256.06603-2.10177.60614-2.76277 1.4786-.06859.09054-.13364.18812-.228.3297l-.01257.01884-.2265.33975c-.34414.51621-.9235.82628-1.54391.82628-1.85322 0-3.35555 1.50233-3.35555 3.35555v4.59445.0321c-.00001.8128-.00001 1.4685.04336 1.9994.04467.5466.13902 1.0267.36537 1.471.35952.7056.9332 1.2792 1.63881 1.6388.44421.2263.92435.3207 1.47099.3653.53091.0434 1.18651.0434 1.99935.0434h.03212 8.4.0321c.8129 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3596 1.2792-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0434-.5309.0434-1.1865.0434-1.9994v-.0321-4.59445c0-1.85322-1.5023-3.35555-3.3556-3.35555-.6204 0-1.1997-.31007-1.5439-.82628l-.2265-.33975-.0125-.01881-.0001-.00009c-.0943-.14154-.1593-.23911-.2279-.32964-.661-.87246-1.6702-1.41257-2.7628-1.4786-.1134-.00685-.2307-.00684-.4008-.00683h-.0227zm-.333 1.5041c.0625-.00378.1318-.0041.333-.0041h2.3944c.2012 0 .2705.00032.333.0041.6555.03962 1.2611.36368 1.6577.88716.0378.04988.0765.10735.1881.27476l.2265.33975c.6223.93351 1.67 1.49423 2.7919 1.49423 1.0248 0 1.8556.83076 1.8556 1.85555v4.59445c0 .8525-.0006 1.4467-.0384 1.9093-.0371.4539-.1062.7147-.2068.9122-.2158.4233-.56.7675-.9833.9833-.1975.1006-.4583.1697-.9122.2068-.4626.0378-1.0568.0384-1.9093.0384h-8.4c-.85246 0-1.44669-.0006-1.90932-.0384-.45388-.0371-.71464-.1062-.91216-.2068-.42336-.2158-.76757-.56-.98328-.9833-.10064-.1975-.16978-.4583-.20686-.9122-.0378-.4626-.03838-1.0568-.03838-1.9093v-4.59445c0-1.02479.83076-1.85555 1.85555-1.85555 1.12194 0 2.16965-.56072 2.79199-1.49423l.2265-.33975c.11161-.16741.15031-.22488.1881-.27476.3966-.52348 1.00212-.84754 1.65766-.88716zm-1.2198 7.7459c0-1.5188 1.2312-2.75 2.75-2.75s2.75 1.2312 2.75 2.75-1.2312 2.75-2.75 2.75-2.75-1.2312-2.75-2.75zm2.75-4.25c-2.34721 0-4.25 1.9028-4.25 4.25s1.90279 4.25 4.25 4.25c2.3472 0 4.25-1.9028 4.25-4.25s-1.9028-4.25-4.25-4.25z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
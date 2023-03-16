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
    d: "m12.9142 4.93166c-.582-.25878-1.2464-.25878-1.8284 0-.2563.11399-.5527.37096-.9824.97763-.42756.60357-.91911 1.45111-1.60837 2.64165l-2.67466 4.61986c-.69171 1.1948-1.1838 2.0462-1.49543 2.7199-.3133.6772-.38859 1.0632-.35946 1.3426.06616.6346.39864 1.2113.9147 1.5865.22717.1652.59901.2935 1.34207.3616.7391.0678 1.72253.0686 3.1031.0686h5.34935c1.3805 0 2.364-.0008 3.1031-.0686.743-.0681 1.1149-.1964 1.342-.3616.5161-.3752.8486-.9519.9147-1.5865.0292-.2794-.0461-.6654-.3594-1.3426-.3117-.6737-.8037-1.5251-1.4955-2.7199l-2.6746-4.61987c-.6893-1.19054-1.1808-2.03807-1.6083-2.64165-.4297-.60666-.7262-.86363-.9825-.97762zm-2.4378-1.37061c.9699-.4313 2.0773-.4313 3.0472 0 .6333.28158 1.1226.81126 1.5971 1.48123.4721.66645.9975 1.5741 1.6626 2.72281l.0198.03429 2.6747 4.61982.0198.0343c.6675 1.1529 1.1949 2.0638 1.5388 2.8073.3458.7473.5621 1.4373.4901 2.128-.1103 1.0577-.6645 2.0188-1.5246 2.6442-.5616.4084-1.2671.5669-2.0871.6422-.8158.0748-1.8683.0748-3.2005.0748h-.0396-5.34935-.0396c-1.33223 0-2.38471 0-3.20054-.0748-.81995-.0753-1.52545-.2338-2.08715-.6422-.86009-.6254-1.41423-1.5865-1.5245-2.6442-.07201-.6907.14429-1.3807.49001-2.128.34399-.7435.87132-1.6543 1.53882-2.8073l.01984-.0343 2.67466-4.61982.01983-.03424c.66505-1.14874 1.19053-2.0564 1.66258-2.72286.47455-.66997.96384-1.19965 1.5971-1.48123zm1.5236 5.18894c.4142 0 .75.33579.75.75v3.50001c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-3.50001c0-.41421.3358-.75.75-.75zm0 6.25001c-.5523 0-1 .4477-1 1s.4477 1 1 1h.01c.5523 0 1-.4477 1-1s-.4477-1-1-1z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
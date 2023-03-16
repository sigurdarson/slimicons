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
  }, props), /*#__PURE__*/React.createElement("g", {
    clipRule: "evenodd",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6.21967 5.46967c.29289-.29289.76777-.29289 1.06066 0l2.62858 2.62858c.57479.57477 1.03839 1.03835 1.38309 1.44443.355.41812.6278.82432.7818 1.29852.2447.7531.2447 1.5645 0 2.3176-.154.4742-.4268.8804-.7818 1.2985-.3447.4061-.8083.8697-1.38308 1.4444l-2.62859 2.6286c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7677 0-1.0606l2.60589-2.6059c.60277-.6028 1.02255-1.0234 1.32294-1.3773.2947-.3471.4302-.5804.4987-.7912.1469-.4519.1469-.9387 0-1.3906-.0685-.2108-.204-.4441-.4987-.7912-.30039-.3539-.72017-.77451-1.32294-1.37728l-2.60589-2.60589c-.29289-.29289-.29289-.76777 0-1.06066z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m11.9597 5.46967c.2929-.29289.7677-.29289 1.0606 0l2.6286 2.62858c.5748.57477 1.0384 1.03835 1.3831 1.44443.355.41812.6277.82432.7818 1.29852.2447.7531.2447 1.5645 0 2.3176-.1541.4742-.4268.8804-.7818 1.2985-.3447.4061-.8083.8697-1.3831 1.4444l-2.6286 2.6286c-.2929.2929-.7677.2929-1.0606 0s-.2929-.7677 0-1.0606l2.6058-2.6059c.6028-.6028 1.0226-1.0234 1.323-1.3773.2947-.3471.4302-.5804.4987-.7912.1469-.4519.1469-.9387 0-1.3906-.0685-.2108-.204-.4441-.4987-.7912-.3004-.3539-.7202-.77451-1.323-1.37728l-2.6058-2.60589c-.2929-.29289-.2929-.76777 0-1.06066z"
  })));
};
var _default = SvgComponent;
exports["default"] = _default;
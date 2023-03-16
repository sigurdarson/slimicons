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
    d: "m10.6186 4.02454c.8125-.63194 1.9503-.63194 2.7628 0l6 4.66667c.548.42628.8686 1.08171.8686 1.77609v9.5327c0 .3315-.1317.6495-.3661.8839s-.5524.3661-.8839.3661h-3.25v-6.25c0-2.0711-1.6789-3.75-3.75-3.75-2.07107 0-3.75 1.6789-3.75 3.75v6.25h-3.25c-.33152 0-.64946-.1317-.88388-.3661s-.36612-.5524-.36612-.8839v-9.5327c0-.69438.32056-1.34982.86863-1.77609zm-1.61689 18.72546c-.00057 0-.00114 0-.00171 0s-.00114 0-.00171 0h-3.99829c-.72935 0-1.42882-.2897-1.94454-.8055-.51573-.5157-.80546-1.2152-.80546-1.9445v-9.5327c0-1.15726.53427-2.24966 1.44772-2.96012l6-4.66667c1.35418-1.05324 3.25038-1.05324 4.60458 0l6 4.66667c.9134.71046 1.4477 1.80286 1.4477 2.96012v9.5327c0 .7293-.2897 1.4288-.8055 1.9445-.5157.5158-1.2152.8055-1.9445.8055h-3.9983c-.0006 0-.0011 0-.0017 0s-.0011 0-.0017 0zm5.24829-1.5h-4.5v-6.25c0-1.2426 1.0074-2.25 2.25-2.25s2.25 1.0074 2.25 2.25z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
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
    width: props.size || 24,
    height: props.size || 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 10.6154C20 14.8212 14.9091 21 12 21C9.09091 21 4 14.8212 4 10.6154C4 8.59566 4.84285 6.65866 6.34315 5.23049C7.84344 3.80233 9.87827 3 12 3C14.1217 3 16.1566 3.80233 17.6569 5.23049C19.1571 6.65866 20 8.59566 20 10.6154Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.2 14C9.35131 14 8.53737 13.6935 7.93726 13.1479C7.33714 12.6024 7 11.8624 7 11.0909V10.7273C7 10.5344 7.08429 10.3494 7.23431 10.213C7.38434 10.0766 7.58783 10 7.8 10C8.64869 10 9.46263 10.3065 10.0627 10.8521C10.6629 11.3976 11 12.1376 11 12.9091V13.2727C11 13.4656 10.9157 13.6506 10.7657 13.787C10.6157 13.9234 10.4122 14 10.2 14V14Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.2 10C16.4122 10 16.6157 10.0766 16.7657 10.213C16.9157 10.3494 17 10.5344 17 10.7273V11.0909C17 11.8624 16.6629 12.6024 16.0627 13.1479C15.4626 13.6935 14.6487 14 13.8 14C13.5878 14 13.3843 13.9234 13.2343 13.787C13.0843 13.6506 13 13.4656 13 13.2727V12.9091C13 12.1376 13.3371 11.3976 13.9373 10.8521C14.5374 10.3065 15.3513 10 16.2 10Z",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 17H14",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
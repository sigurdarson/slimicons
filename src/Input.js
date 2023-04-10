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
    d: "M14 8.75C14.4142 8.75 14.75 8.41421 14.75 8C14.75 7.58579 14.4142 7.25 14 7.25V8.75ZM14 16.75C14.4142 16.75 14.75 16.4142 14.75 16C14.75 15.5858 14.4142 15.25 14 15.25V16.75ZM5.22354 15.8978L5.02943 16.6222L5.22354 15.8978ZM20.8978 13.7765L21.6222 13.9706L20.8978 13.7765ZM18.7765 15.8978L18.5823 15.1733L18.7765 15.8978ZM20.8978 10.2235L20.1733 10.4177L20.8978 10.2235ZM18.7765 8.10222L18.5823 8.82667L18.7765 8.10222ZM7 8.75H14V7.25H7V8.75ZM14 15.25H7V16.75H14V15.25ZM2.25 12C2.25 12.8817 2.24356 13.4697 2.37778 13.9706L3.82667 13.5823C3.75644 13.3203 3.75 12.9783 3.75 12H2.25ZM7 15.25C6.02174 15.25 5.67974 15.2436 5.41766 15.1733L5.02943 16.6222C5.53034 16.7564 6.11831 16.75 7 16.75V15.25ZM2.37778 13.9706C2.72453 15.2647 3.73533 16.2755 5.02943 16.6222L5.41766 15.1733C4.6412 14.9653 4.03472 14.3588 3.82667 13.5823L2.37778 13.9706ZM20.25 12C20.25 12.9783 20.2436 13.3203 20.1733 13.5823L21.6222 13.9706C21.7564 13.4697 21.75 12.8817 21.75 12H20.25ZM17 16.75C17.8817 16.75 18.4697 16.7564 18.9706 16.6222L18.5823 15.1733C18.3203 15.2436 17.9783 15.25 17 15.25V16.75ZM20.1733 13.5823C19.9653 14.3588 19.3588 14.9653 18.5823 15.1733L18.9706 16.6222C20.2647 16.2755 21.2755 15.2647 21.6222 13.9706L20.1733 13.5823ZM21.75 12C21.75 11.1183 21.7564 10.5303 21.6222 10.0294L20.1733 10.4177C20.2436 10.6797 20.25 11.0217 20.25 12H21.75ZM17 8.75C17.9783 8.75 18.3203 8.75644 18.5823 8.82667L18.9706 7.37778C18.4697 7.24356 17.8817 7.25 17 7.25V8.75ZM21.6222 10.0294C21.2755 8.73533 20.2647 7.72453 18.9706 7.37778L18.5823 8.82667C19.3588 9.03472 19.9653 9.6412 20.1733 10.4177L21.6222 10.0294ZM3.75 12C3.75 11.0217 3.75644 10.6797 3.82667 10.4177L2.37778 10.0294C2.24356 10.5303 2.25 11.1183 2.25 12H3.75ZM7 7.25C6.11831 7.25 5.53034 7.24356 5.02943 7.37778L5.41766 8.82667C5.67974 8.75644 6.02174 8.75 7 8.75V7.25ZM3.82667 10.4177C4.03472 9.6412 4.6412 9.03472 5.41766 8.82667L5.02943 7.37778C3.73533 7.72453 2.72453 8.73533 2.37778 10.0294L3.82667 10.4177Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5V19",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 5H14",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 19H14",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
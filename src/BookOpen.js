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
    d: "M12 21L12.5941 20.4059C13.113 19.887 13.3724 19.6276 13.6751 19.4421C13.9436 19.2776 14.2362 19.1564 14.5423 19.0829C14.8876 19 15.2545 19 15.9882 19H19.4C19.9601 19 20.2401 19 20.454 18.891C20.6422 18.7951 20.7951 18.6422 20.891 18.454C21 18.2401 21 17.9601 21 17.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H15.9882C15.2545 3 14.8876 3 14.5423 3.08289C14.2362 3.15638 13.9436 3.27759 13.6751 3.44208C13.3724 3.6276 13.113 3.88703 12.5941 4.40589L12 5M12 21L11.4059 20.4059C10.887 19.887 10.6276 19.6276 10.3249 19.4421C10.0564 19.2776 9.7638 19.1564 9.4577 19.0829C9.11243 19 8.74555 19 8.01178 19H4.6C4.03995 19 3.75992 19 3.54601 18.891C3.35785 18.7951 3.20487 18.6422 3.10899 18.454C3 18.2401 3 17.9601 3 17.4V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H8.01178C8.74555 3 9.11243 3 9.4577 3.08289C9.7638 3.15638 10.0564 3.27759 10.3249 3.44208C10.6276 3.6276 10.887 3.88703 11.4059 4.40589L12 5M12 21V5",
    stroke: props.color || "#000",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
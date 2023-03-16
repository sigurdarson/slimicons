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
    d: "m13.1588 3.67618c-.7531-.24472-1.5645-.24472-2.3176 0-.4742.15406-.8804.42685-1.29852.7818-.40607.34474-.86966.80832-1.44441 1.38309l-.00001.00001-.0227.0227-2.60589 2.60589c-.29289.29289-.29289.76777 0 1.06066s.76777.29289 1.06066 0l2.60589-2.60589c.60277-.60277 1.02338-1.02255 1.37728-1.32295.3471-.29472.5804-.43022.7912-.49873.4519-.14683.9387-.14683 1.3906 0 .2108.06851.4441.20401.7912.49873.3539.3004.7745.72018 1.3773 1.32295l2.6059 2.60589c.2929.29289.7677.29289 1.0606 0s.2929-.76777 0-1.06066l-2.6059-2.60589-.0226-.02269c-.5748-.57477-1.0384-1.03837-1.4445-1.38311-.4181-.35495-.8243-.62774-1.2985-.7818zm-6.62847 10.79352c-.29289-.2929-.76777-.2929-1.06066 0s-.29289.7677 0 1.0606l2.60589 2.6059.0227.0227c.57476.5748 1.03834 1.0384 1.44442 1.3831.41812.355.82432.6278 1.29852.7818.7531.2447 1.5645.2447 2.3176 0 .4742-.154.8804-.4268 1.2985-.7818.4061-.3447.8697-.8083 1.4444-1.3831l.0227-.0227 2.6059-2.6059c.2929-.2929.2929-.7677 0-1.0606s-.7677-.2929-1.0606 0l-2.6059 2.6059c-.6028.6027-1.0234 1.0225-1.3773 1.3229-.3471.2947-.5804.4302-.7912.4987-.4519.1469-.9387.1469-1.3906 0-.2108-.0685-.4441-.204-.7912-.4987-.3539-.3004-.77451-.7202-1.37728-1.3229z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
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
    d: "m8.46967 5.46967c.2929-.29289.76777-.29289 1.06066 0 .2929.29289.2929.76777 0 1.06066l-2.60588 2.60589c-.60278.60277-1.02255 1.02338-1.32296 1.37728-.29471.3471-.43022.5804-.49872.7912-.14683.4519-.14683.9387 0 1.3906.0685.2108.20401.4441.49872.7912.30041.3539.72018.7745 1.32296 1.3773l2.60588 2.6059c.2929.2929.2929.7677 0 1.0606-.29289.2929-.76776.2929-1.06066 0l-2.60588-2.6059-.02271-.0227h-.00002c-.57476-.5747-1.03834-1.0383-1.38307-1.4444-.35496-.4181-.62774-.8243-.78181-1.2985-.24471-.7531-.24471-1.5645 0-2.3176.15407-.4742.42685-.8804.7818-1.29852.34474-.40608.80834-.86966 1.38311-1.44443l.0227-.02269zm7.06063 0c-.2929-.29289-.7677-.29289-1.0606 0s-.2929.76777 0 1.06066l2.6059 2.60589c.6027.60277 1.0225 1.02338 1.3229 1.37728.2947.3471.4302.5804.4987.7912.1469.4519.1469.9387 0 1.3906-.0685.2108-.204.4441-.4987.7912-.3004.3539-.7202.7745-1.3229 1.3773l-2.6059 2.6059c-.2929.2929-.2929.7677 0 1.0606s.7677.2929 1.0606 0l2.6059-2.6059.0227-.0227c.5748-.5747 1.0384-1.0383 1.3831-1.4444.355-.4181.6278-.8243.7818-1.2985.2447-.7531.2447-1.5645 0-2.3176-.154-.4742-.4268-.8804-.7818-1.29852-.3447-.40608-.8083-.86966-1.3831-1.44443l-.0227-.02269z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
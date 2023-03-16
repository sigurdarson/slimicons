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
    d: "m12 2.25c-1.5208 0-2.79833 1.14348-2.96627 2.65494l-.0917.82526c-.01543.13888-.11542.30627-.31935.42432-.20104.11638-.39276.11958-.52314.06246l-.7609-.33338c-1.39293-.61029-3.022-.07562-3.78238 1.2414s-.40889 2.9952.81611 3.8963l.66963.4927c.11406.0839.20801.2529.20801.486s-.09395.4021-.20801.486l-.66963.4927c-1.225.9011-1.57649 2.5793-.81611 3.8963s2.38945 1.8517 3.78238 1.2414l.7609-.3334c.13038-.0571.3221-.0539.52314.0625.20393.118.30392.2854.31935.4243l.0917.8253c.16794 1.5114 1.44547 2.6549 2.96627 2.6549s2.7983-1.1435 2.9663-2.6549l.0917-.8253c.0154-.1389.1154-.3063.3193-.4243.2011-.1164.3928-.1196.5232-.0625l.7609.3334c1.3929.6103 3.022.0756 3.7824-1.2414.7603-1.317.4088-2.9952-.8162-3.8963l-.6696-.4927c-.114-.0839-.208-.2529-.208-.486s.094-.4021.208-.486l.6696-.4927c1.225-.9011 1.5765-2.57928.8162-3.8963-.7604-1.31702-2.3895-1.85169-3.7824-1.2414l-.7609.33337c-.1304.05713-.3221.05393-.5232-.06245-.2039-.11805-.3039-.28544-.3193-.42433l-.0917-.82525c-.168-1.51146-1.4455-2.65494-2.9663-2.65494zm-1.4754 2.82059c.0835-.75181.719-1.32059 1.4754-1.32059s1.3919.56878 1.4755 1.32059l.0917.82525c.0781.70365.5289 1.25021 1.0586 1.55686.5335.30881 1.2296.42166 1.8766.13819l.7609-.33337c.6929-.30357 1.5032-.03762 1.8814.61748s.2034 1.48982-.4059 1.93807l-.6696.49263c-.5691.4186-.8192 1.0794-.8192 1.6943s.2501 1.2757.8192 1.6943l.6696.4926c.6093.4483.7841 1.283.4059 1.9381s-1.1885.921-1.8814.6175l-.7609-.3334c-.647-.2835-1.3431-.1706-1.8766.1382-.5297.3067-.9805.8532-1.0586 1.5569l-.0917.8252c-.0836.7518-.7191 1.3206-1.4755 1.3206s-1.3919-.5688-1.4754-1.3206l-.0917-.8252c-.0782-.7037-.529-1.2502-1.05873-1.5569-.53347-.3088-1.2296-.4217-1.87659-.1382l-.76089.3334c-.69286.3035-1.50317.0376-1.88139-.6175-.37823-.6551-.20339-1.4898.40594-1.9381l.66963-.4926c.56902-.4186.81914-1.0794.81914-1.6943s-.25012-1.2757-.81914-1.6943l-.66963-.49263c-.60933-.44825-.78417-1.28297-.40594-1.93807.37822-.6551 1.18853-.92105 1.88139-.61748l.76089.33337c.64699.28347 1.34312.17062 1.87659-.13819.52973-.30665.98053-.85321 1.05873-1.55685zm.2254 6.92941c0-.6904.5597-1.25 1.25-1.25.6904 0 1.25.5596 1.25 1.25s-.5596 1.25-1.25 1.25c-.6903 0-1.25-.5596-1.25-1.25zm1.25-2.75c-1.5188 0-2.74999 1.2312-2.74999 2.75s1.23119 2.75 2.74999 2.75 2.75-1.2312 2.75-2.75-1.2312-2.75-2.75-2.75z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
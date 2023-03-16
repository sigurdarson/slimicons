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
    d: "m6.86026 5.77372c1.35712-1.29187 3.20534-2.02372 5.13974-2.02372s3.7826.73185 5.1397 2.02372c1.3559 1.29068 2.1103 3.03311 2.1103 4.84168 0 1.8548-1.1528 4.2867-2.7475 6.3044-.7856.994-1.6469 1.8462-2.4665 2.4426-.8416.6124-1.5462.8876-2.036.8876s-1.1944-.2752-2.03599-.8876c-.81961-.5964-1.68087-1.4486-2.46651-2.4426-1.59469-2.0177-2.7475-4.4496-2.7475-6.3044 0-1.80857.75439-3.551 2.11026-4.84168zm5.13974-3.52372c-2.30905 0-4.53051.87282-6.17396 2.43727-1.64472 1.56564-2.57604 3.69722-2.57604 5.92813 0 2.351 1.39264 5.1113 3.07068 7.2345.85072 1.0764 1.80764 2.0318 2.76076 2.7254.93116.6775 1.95376 1.1747 2.91856 1.1747s1.9874-.4972 2.9186-1.1747c.9531-.6936 1.91-1.649 2.7607-2.7254 1.6781-2.1232 3.0707-4.8835 3.0707-7.2345 0-2.23091-.9313-4.36249-2.576-5.92813-1.6435-1.56445-3.865-2.43727-6.174-2.43727zm-1.75 10.6591v.3301c-.0104.0052-.0272.0108-.05.0108-.67163 0-1.30306-.2432-1.75824-.657-.4528-.4116-.69176-.9538-.69176-1.5021v-.3301c.0104-.0052.02723-.0108.05-.0108.67163 0 1.30305.2432 1.75824.657.45276.4116.69176.9538.69176 1.5021zm-.05 1.8409c.3892 0 .7752-.1399 1.0702-.4081.2973-.2703.4798-.6531.4798-1.0692v-.3636c0-.9948-.4353-1.9325-1.1828-2.612-.745-.67732-1.74144-1.0471-2.7672-1.0471-.38924 0-.77523.13991-1.07019.40806-.29734.27031-.47981.65314-.47981 1.06924v.3636c0 .9948.43532 1.9325 1.18275 2.612.74505.6773 1.74149 1.0471 2.76725 1.0471zm6-4c-.6716 0-1.3031.2432-1.7582.657-.4528.4116-.6918.9538-.6918 1.5021v.3301c.0104.0052.0272.0108.05.0108.6716 0 1.3031-.2432 1.7582-.657.4528-.4116.6918-.9538.6918-1.5021v-.3301c-.0104-.0052-.0272-.0108-.05-.0108zm-2.7672-.4529c.745-.67732 1.7414-1.0471 2.7672-1.0471.3892 0 .7752.13991 1.0702.40806.2973.27031.4798.65314.4798 1.06924v.3636c0 .9948-.4353 1.9325-1.1828 2.612-.745.6773-1.7414 1.0471-2.7672 1.0471-.3892 0-.7752-.1399-1.0702-.4081-.2973-.2703-.4798-.6531-.4798-1.0692v-.3636c0-.9948.4353-1.9325 1.1828-2.612zm-3.4328 5.9529c-.41421 0-.75.3358-.75.75s.33579.75.75.75h4c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
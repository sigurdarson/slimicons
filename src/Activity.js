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
    d: "m9.61954 6.62394c-.01804.0188-.08318.0875-.19772.27449-.17279.28208-.38002.69503-.68529 1.30558l-1.62348 3.24699c-.0106.0212-.02123.0425-.03191.064-.12656.2547-.26165.5266-.47467.7352-.18531.1815-.40866.3196-.65388.4042-.28187.0972-.58546.0964-.86986.0957-.02401 0-.04788-.0001-.07158-.0001h-2.01115c-.41421 0-.75-.3358-.75-.75s.33579-.75.75-.75h2.01115c.18855 0 .29609-.0003.37695-.0054.04979-.0031.07052-.0071.07597-.0085.03461-.012.06614-.0315.09238-.057.00362-.0043.01652-.0211.04157-.0642.04067-.0701.08906-.1661.17339-.3348l1.63973-3.27941c.28491-.56985.52083-1.04172.73158-1.38578.19655-.32087.46988-.70707.89812-.87676.53844-.21335 1.14756-.14648 1.62686.17859.3813.25854.5643.69484.6866 1.05071.1311.38159.259.89341.4135 1.5115l1.4076 5.63025c.2311.9246.3944 1.5756.5429 2.0253.0739.2239.1336.3643.1801.4486.0065.0117.0122.0213.0169.029.0547.0197.1147.0197.1694 0 .0047-.0077.0104-.0173.0169-.029.0465-.0843.1062-.2247.1801-.4486.1485-.4497.3118-1.1007.5429-2.0253l.1448-.5791c.0073-.029.0145-.0582.0217-.0876.0842-.3413.1738-.7042.3889-.9914.1865-.2491.436-.4439.7229-.5645.3308-.1389.7046-.1378 1.0561-.1368.0303.0001.0604.0002.0902.0002h3.7508c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-3.7508c-.234 0-.37.0005-.4716.0078-.0622.0045-.0882.0104-.0951.0123-.0399.0171-.0747.0442-.1009.0788-.0035.0062-.0156.03-.035.0893-.0318.0968-.0652.2286-.122.4557l-.1531.6126c-.2209.8836-.3973 1.5892-.5654 2.0982-.0854.2587-.1791.5002-.2915.7036-.1085.1965-.2717.4271-.5294.5782-.5466.3205-1.2238.3205-1.7704 0-.2577-.1511-.4209-.3817-.5294-.5782-.1124-.2034-.2061-.4449-.2915-.7036-.1681-.509-.3445-1.2146-.5654-2.0982l-1.4071-5.62852c-.1655-.66223-.2783-1.1103-.38575-1.42315-.07124-.20738-.11993-.28857-.13346-.31084-.05611-.02962-.12145-.03679-.18265-.02005zm6.96316 6.22326c0-.0001-.0004.0008-.0011.0017zm.0978-.0764c0-.0001.0009-.0003.002-.0007zm-2.7465 3.3686s-.0002-.0003-.0007-.0009zm-8.37863-4.9592c.00001 0 .00043-.0005.00108-.0011z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
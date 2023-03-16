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
    d: "m7.7679 2.25h.0321 8.4.0321c.8129-.00001 1.4685-.00001 1.9994.04336.5466.04467 1.0267.13903 1.471.36537.7056.35952 1.2792.9332 1.6388 1.63881.2263.44421.3207.92436.3653 1.47099.0434.53091.0434 1.18652.0434 1.99935v.03212 8.4.0321c0 .8129 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3596.7056-.9332 1.2792-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1865.0434-1.9994.0434h-.0321-8.4-.03212c-.81283 0-1.46844 0-1.99935-.0434-.54663-.0446-1.02678-.139-1.47099-.3653-.70561-.3596-1.27929-.9332-1.63881-1.6388-.22634-.4443-.3207-.9244-.36537-1.471-.04337-.5309-.04337-1.1865-.04336-1.9994v-.0321-8.4-.0321-.00002c-.00001-.81283-.00001-1.46844.04336-1.99935.04467-.54663.13903-1.02678.36537-1.47099.35952-.70561.9332-1.27929 1.63881-1.63881.44421-.22634.92436-.3207 1.47099-.36537.53091-.04337 1.18652-.04337 1.99935-.04336zm-1.87722 1.53838c-.45387.03709-.71464.10622-.91216.20686-.42336.21571-.76757.55992-.98328.98328-.10064.19752-.16977.45829-.20686.91216-.0378.46263-.03838 1.05687-.03838 1.90932v7.7229l1.26095-1.8914c.95337-1.4301 3.03431-1.4878 4.06554-.1128.41769.5569 1.26431.5209 1.63331-.0694l1.058-1.6929c1.4845-2.37522 4.9545-2.34368 6.3956.0582l2.0866 3.4777v-7.4923c0-.85245-.0006-1.44669-.0384-1.90932-.0371-.45387-.1062-.71464-.2068-.91216-.2158-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16977-.9122-.20686-.4626-.0378-1.0568-.03838-1.9093-.03838h-8.4c-.85245 0-1.44669.00058-1.90932.03838zm-1.89544 15.23312c-.09664-.1897-.16422-.4376-.20227-.8589l2.46605-3.6991c.3793-.5689 1.2072-.5919 1.61747-.0448 1.04988 1.3998 3.17791 1.3094 4.10531-.1744l1.058-1.6929c.8907-1.4251 2.9727-1.4062 3.8373.0349l3.332 5.5532c-.0377.4353-.106.6889-.2043.882-.2158.4233-.56.7675-.9833.9833-.1975.1006-.4583.1697-.9122.2068-.4626.0378-1.0568.0384-1.9093.0384h-8.4c-.85245 0-1.44669-.0006-1.90932-.0384-.45387-.0371-.71464-.1062-.91216-.2068-.42336-.2158-.76757-.56-.98328-.9833zm2.75476-11.0215c0-.69036.55964-1.25 1.25-1.25s1.25.55964 1.25 1.25-.55964 1.25-1.25 1.25-1.25-.55964-1.25-1.25zm1.25-2.75c-1.51878 0-2.75 1.23122-2.75 2.75s1.23122 2.75 2.75 2.75 2.75-1.23122 2.75-2.75-1.23122-2.75-2.75-2.75z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
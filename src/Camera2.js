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
    d: "m7.8 5.25h-.0321c-.81284-.00001-1.46846-.00001-1.99937.04336-.54663.04467-1.02678.13903-1.47099.36537-.70561.35952-1.27929.9332-1.63881 1.63881-.22634.44421-.3207.92436-.36537 1.47099-.04337.53091-.04337 1.18652-.04336 1.99937v.0321 2.4.0321c-.00001.8129-.00001 1.4685.04336 1.9994.04467.5466.13903 1.0267.36537 1.471.35952.7056.9332 1.2792 1.63881 1.6388.44421.2263.92436.3207 1.47099.3653.53091.0434 1.18652.0434 1.99935.0434h.03212 2.4.0321c.8129 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3596 1.2792-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0013-.0154.0025-.0309.0037-.0465.1607.0894.3373.1775.5318.2746h.0001l.0807.0404.0278.0139c.6138.3069 1.1132.5566 1.5235.7239.4148.1692.8256.2924 1.2494.2734.9521-.0429 1.8142-.5757 2.2783-1.4081.2066-.3705.28-.7931.3143-1.2397.0338-.4419.0338-1.0002.0338-1.6865v-.031-.2918-.031c0-.6863 0-1.2446-.0338-1.6865-.0343-.44661-.1077-.86918-.3143-1.23968-.4641-.83245-1.3262-1.36523-2.2783-1.40807-.4238-.01907-.8346.1042-1.2494.27334-.4103.16733-.9097.41701-1.5235.72394l-.0278.01387-.0807.04035c-.1946.09712-.3712.18528-.5319.27466-.0012-.0156-.0024-.03109-.0037-.04648-.0446-.54663-.139-1.02678-.3653-1.47099-.3596-.70561-.9332-1.27929-1.6388-1.63881-.4443-.22634-.9244-.3207-1.471-.36537-.5309-.04337-1.1866-.04337-1.9994-.04336h-.0321zm7.95 6.6041v.2918c0 .6426.0068.8161.0476.9596.0634.2233.1878.4245.3591.5812.1101.1006.2623.1843.8371.4717.6482.3241 1.0961.5474 1.4468.6905.3525.1437.52.1681.6156.1638.4328-.0195.8246-.2617 1.0356-.6401.0466-.0835.0997-.2443.1287-.6238.029-.3777.0295-.8781.0295-1.6029v-.2918c0-.7248-.0005-1.2252-.0295-1.6029-.029-.3795-.0821-.54028-.1287-.62384-.211-.37838-.6028-.62056-1.0356-.64003-.0956-.0043-.2631.0201-.6156.16382-.3507.14301-.7986.36637-1.4468.69049-.5748.28736-.727.37106-.8371.47166-.1713.1567-.2957.3579-.3591.5812-.0408.1435-.0476.317-.0476.9596zm-1.5-.2611v-.793c0-.85245-.0006-1.44669-.0384-1.90932-.0371-.45388-.1062-.71464-.2068-.91216-.2158-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16977-.9122-.20686-.4626-.0378-1.0568-.03838-1.9093-.03838h-2.4c-.85245 0-1.44669.00058-1.90932.03838-.45387.03709-.71464.10622-.91216.20686-.42336.21571-.76757.55992-.98328.98328-.10064.19752-.16977.45828-.20686.91216-.0378.46263-.03838 1.05687-.03838 1.90932v2.4c0 .8525.00058 1.4467.03838 1.9093.03709.4539.10622.7147.20686.9122.21571.4233.55992.7675.98328.9833.19752.1006.45829.1697.91216.2068.46263.0378 1.05687.0384 1.90932.0384h2.4c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2158.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-.793c-.0001-.0556-.0001-.1125 0-.1708v-.0903-.2918-.0903c-.0001-.0583-.0001-.1152 0-.1708z",
    fill: "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
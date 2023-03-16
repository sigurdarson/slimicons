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
    d: "m6.74064 5.10046c-1.32135.82585-1.99064 1.87073-1.99064 2.89954s.66929 2.0737 1.99064 2.8995c1.31079.8193 3.1683 1.3505 5.25936 1.3505 2.0911 0 3.9486-.5312 5.2594-1.3505 1.3213-.8258 1.9906-1.87069 1.9906-2.8995s-.6693-2.07369-1.9906-2.89954c-1.3108-.81924-3.1683-1.35046-5.2594-1.35046-2.09106 0-3.94857.53122-5.25936 1.35046zm-.79499-1.27199c1.58464-.99041 3.72713-1.57847 6.05435-1.57847 2.3272 0 4.4697.58806 6.0544 1.57847 1.574.98379 2.6956 2.43891 2.6956 4.17153 0 .7193-.1933 1.39077-.532 2.0006.3387.6117.532 1.2855.532 1.9994 0 .7193-.1933 1.3908-.532 2.0006.3387.6117.532 1.2855.532 1.9994 0 1.7326-1.1216 3.1877-2.6956 4.1715-1.5847.9904-3.7272 1.5785-6.0544 1.5785-2.32722 0-4.46971-.5881-6.05435-1.5785-1.57408-.9838-2.69565-2.4389-2.69565-4.1715 0-.7139.19328-1.3877.53204-1.9994-.33873-.6098-.53204-1.2813-.53204-2.0006 0-.7157.19377-1.3886.53208-1.9994-.33876-.60978-.53208-1.28127-.53208-2.0006 0-1.73262 1.12157-3.18774 2.69565-4.17153zm-1.1027 11.50373c-.06191.2204-.09295.4434-.09295.6678 0 1.0288.66929 2.0737 1.99064 2.8995 1.31079.8193 3.1683 1.3505 5.25936 1.3505 2.0911 0 3.9486-.5312 5.2594-1.3505 1.3213-.8258 1.9906-1.8707 1.9906-2.8995 0-.2244-.031-.4474-.0929-.6678-.331.3081-.7022.589-1.1027.8393-1.5847.9904-3.7272 1.5785-6.0544 1.5785-2.32722 0-4.46971-.5881-6.05435-1.5785-.40054-.2503-.77179-.5312-1.1027-.8393zm13.21145-3.1607c.4005-.2503.7717-.5312 1.1027-.8393.0619.2204.0929.4434.0929.6678 0 1.0288-.6693 2.0737-1.9906 2.8995-1.3108.8193-3.1683 1.3505-5.2594 1.3505-2.09106 0-3.94857-.5312-5.25936-1.3505-1.32135-.8258-1.99064-1.8707-1.99064-2.8995 0-.2237.031-.4468.09302-.6678.3309.3082.70212.589 1.10263.8393 1.58464.9904 3.72713 1.5785 6.05435 1.5785 2.3272 0 4.4697-.5881 6.0544-1.5785z",
    fill: props.color || "#000",
    fillRule: "evenodd"
  }));
};
var _default = SvgComponent;
exports["default"] = _default;
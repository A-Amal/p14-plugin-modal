"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContent = ModalContent;
var _react = require("react");
/**
 * Show content wrapper
 * @component
 */
function ModalContent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.createElement("div", {
    className: "modal-content"
  }, children);
}

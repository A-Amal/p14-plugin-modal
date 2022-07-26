"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContent = ModalContent;

/**
 * Show content wrapper
 * @component
 */
function ModalContent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, children);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTitle = ModalTitle;

/**
 * Show title wrapper
 * @component
 */
function ModalTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("h3", {
    className: "modal-title",
    id: "modal-title"
  }, children);
}
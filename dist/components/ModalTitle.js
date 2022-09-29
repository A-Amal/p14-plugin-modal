"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTitle = ModalTitle;
var _react = require("react");
/**
 * Show title wrapper
 * @component
 */
function ModalTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.createElement("h3", {
    className: "modal-title",
    id: "modal-title"
  }, children);
}

"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContext = void 0;
exports.default = Modal;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = require("react");

require("./Modal.css");

/**
 * Create context
 */
var ModalContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Modal
 * @component
 * @param {Object} params
 * @param {String} params.name
 * @param {Boolean} params.showClose
 */

exports.ModalContext = ModalContext;

function Modal(_ref) {
  var _this = this;

  var name = _ref.name,
      _ref$showClose = _ref.showClose,
      showClose = _ref$showClose === void 0 ? true : _ref$showClose,
      children = _ref.children;

  /**
   * References
   */
  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];
  /**
   * Manage keyboard interaction
   * @param  e
   */


  var handelKeydown = (0, _react.useCallback)(function (e) {
    if (e.key === 'Escape') return setShow(false);
  }, [setShow]); // Focus first element focusable

  (0, _react.useEffect)(function () {
    if (show) {
      ref.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0].focus();
      document.addEventListener('keydown', handelKeydown.bind(_this));
    } else {
      document.removeEventListener('keydown', handelKeydown);
    }

    return function () {
      document.removeEventListener('keydown', handelKeydown);
    };
  }, [show, handelKeydown, ref]);
  /**
   * Render
   */

  return show && /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: {
      show: show,
      setShow: setShow,
      showClose: showClose,
      children: children
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    "aria-labelledby": "".concat(name, "-title"),
    role: "dialog",
    "aria-modal": "true",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    "aria-hidden": "true",
    onClick: function onClick() {
      return setShow(!show);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "modal-spacer",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/React.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alert-modal"
  }, children), showClose && /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: function onClick() {
      return setShow(!show);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
  })))))));
} // PropsTypes
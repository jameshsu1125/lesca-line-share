"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.device = void 0;

var _mobileDetect = _interopRequireDefault(require("mobile-detect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var device = function device() {
  var m = new _mobileDetect["default"](window.navigator.userAgent);
  if (m.tablet()) return 'mobile';else if (m.mobile()) return 'mobile';else return 'desktop';
};

exports.device = device;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./constants");

var share = function share(u, t) {
  if ((0, _constants.device)() === 'mobile') window.open("line://msg/text/".concat(encodeURIComponent(t + '\n' + u)), '_blank');else window.open("https://lineit.line.me/share/ui?url=".concat(encodeURIComponent(u), "&text=").concat(encodeURIComponent(t)));
};

var Line = {
  share: share
};
var _default = Line;
exports["default"] = _default;
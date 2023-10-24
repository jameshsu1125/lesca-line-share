"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mise = require("./mise");
var share = function share(url, text) {
  if ((0, _mise.device)() === 'mobile') {
    window.open("line://msg/text/".concat(encodeURIComponent(text + '\n' + url)), '_blank');
  } else {
    window.open("https://lineit.line.me/share/ui?url=".concat(encodeURIComponent(url), "&text=").concat(encodeURIComponent(text)));
  }
};
var Line = {
  share: share
};
var _default = exports["default"] = Line;
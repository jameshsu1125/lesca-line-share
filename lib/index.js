define(["require", "exports", "./mise"], function (require, exports, mise_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var share = function (url, text) {
        if ((0, mise_1.device)() === 'mobile') {
            window.open("line://msg/text/".concat(encodeURIComponent(text + '\n' + url)), '_blank');
        }
        else {
            window.open("https://lineit.line.me/share/ui?url=".concat(encodeURIComponent(url), "&text=").concat(encodeURIComponent(text)));
        }
    };
    var Line = { share: share };
    exports.default = Line;
});

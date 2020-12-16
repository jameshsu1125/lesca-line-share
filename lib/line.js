"use strict";

module.exports = {
  share: function share(u, t) {
    if (this.get() === 'mobile') window.open("line://msg/text/".concat(encodeURIComponent(t + '\n' + u)), '_blank');else window.open("https://lineit.line.me/share/ui?url=".concat(encodeURIComponent(u), "&text=").concat(encodeURIComponent(t)));
  },
  get: function get() {
    var tabletEqualDesktop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var MobileDetect = require('mobile-detect'),
        m = new MobileDetect(window.navigator.userAgent);

    if (m.tablet()) return 'mobile';else if (m.mobile()) return 'mobile';else return 'desktop';
  }
};
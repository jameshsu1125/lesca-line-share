module.exports = {
	share(u, t) {
		if (this.get() === 'mobile') window.open(`line://msg/text/${encodeURIComponent(t + '\n' + u)}`, '_blank');
		else window.open(`https://lineit.line.me/share/ui?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}`);
	},
	get(tabletEqualDesktop = true) {
		let MobileDetect = require('mobile-detect'),
			m = new MobileDetect(window.navigator.userAgent);
		if (m.tablet()) return 'mobile';
		else if (m.mobile()) return 'mobile';
		else return 'desktop';
	},
};

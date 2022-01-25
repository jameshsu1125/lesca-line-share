import MobileDetect from 'mobile-detect';

export const device = () => {
	const m = new MobileDetect(window.navigator.userAgent);
	if (m.tablet()) return 'mobile';
	else if (m.mobile()) return 'mobile';
	else return 'desktop';
};

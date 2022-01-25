import { device } from './constants';

const share = (u, t) => {
	if (device() === 'mobile') window.open(`line://msg/text/${encodeURIComponent(t + '\n' + u)}`, '_blank');
	else window.open(`https://lineit.line.me/share/ui?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}`);
};

const Line = { share };
export default Line;

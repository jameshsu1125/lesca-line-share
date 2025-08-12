import { device } from './misc';

const share = (url: string, text: string) => {
  if (device() === 'mobile') {
    window.open(`line://msg/text/${encodeURIComponent(text + '\n' + url)}`, '_blank');
  } else {
    window.open(
      `https://lineit.line.me/share/ui?url=${encodeURIComponent(url)}&text=${encodeURIComponent(
        text,
      )}`,
    );
  }
};

const Line = { share };
export default Line;

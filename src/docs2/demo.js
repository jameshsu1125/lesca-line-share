import Line from '../lib/index';

const Demo = () => {
	const onClick = () => {
		Line.share('https://github.com/jameshsu1125/lesca-line-share', 'your message');
	};
	return (
		<div>
			<button onClick={onClick}>Share to line</button>
		</div>
	);
};
export default Demo;

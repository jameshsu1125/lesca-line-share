import React, { useCallback } from 'react';
import { render } from 'react-dom';
import Line from '../lib/index';
import './styles.less';

function Page() {
	const onClick = useCallback(() => {
		Line.share(
			'https://github.com/jameshsu1125/lesca-line-share',
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
		);
	}, []);
	return (
		<>
			<div>
				<h1>install</h1>
				<p>npm install lesca-line-share --save</p>
			</div>
			<div>
				<button onClick={onClick}>Share to line</button>
			</div>
		</>
	);
}

render(<Page />, document.getElementById('app'));

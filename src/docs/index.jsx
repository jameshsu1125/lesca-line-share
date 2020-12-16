import React from 'react';
import { render } from 'react-dom';
import Line from './../lib/index';

import './styles.css';

function clicked() {
	Line.share('https://github.com/jameshsu1125/lesca-line-share', 'message');
}

function Demo() {
	return (
		<>
			<button onClick={clicked}>Share to line</button>
		</>
	);
}

render(<Demo />, document.getElementById('app'));
